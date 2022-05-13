"use strict";
self["webpackHotUpdate_N_E"]("pages/addProduct",{

/***/ "./pages/addProduct.js":
/*!*****************************!*\
  !*** ./pages/addProduct.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layer10A; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "H:\\DEVY\\Jewelify-UI\\pages\\addProduct.js",
    _s = $RefreshSig$();






var products = [];
var filteredProductList = [];
function Layer10A() {
  _s();

  var _this = this;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://api.jewelify.ai/.netlify/functions/inventory").then(function (res) {
      return console.log(res.data);
    })["catch"](function (err) {
      return console.log(err);
    });
  }, []);
  product = [{
    category: "1003",
    stockNo: ".50 ct tw",
    styleNUmber: "5",
    brand: "TGT",
    manufacturer: "Dia Cocktl Rings",
    tag: "1",
    storeCode: "001",
    productName: "TEST_PRODUCT",
    companyName: "TEST TSET",
    companyCode: "001",
    qty: "5",
    sku: "32",
    datebuy: "17-Nov-05",
    datesold: "12-Feb-20",
    shortDescription: ".50 ct tw",
    longDescription: ".50 ct tw",
    cost: "900",
    retailPrice: "900",
    onSale: "900",
    productImages: "encoded strings",
    prodCertificatePicture: "",
    certificateNumber: "Z-00123",
    labCertification: "GIA",
    attributes: "",
    shippingLength: "12",
    shippingWidth: "16",
    shippingHeight: "",
    jewelryType: "",
    assetId: "32"
  }];
  filteredProductList = [];
  var prodCategories = [];
  var companies = [];
  var isFilterVisisble = false;
  companies.push("TGT");
  prodCategories.push("Dia Cocktl Rings");
  prodCategories.push("Anklet");
  prodCategories.push("Rings");
  products.forEach(function (element) {
    filteredProductList.push(element);
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      count = _useState[0],
      setCount = _useState[1];

  var increment = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    setCount(function (v) {
      return v + 1;
    });
  }, [setCount]);

  var handleFilter = function handleFilter(event) {
    isFilterVisibile = !isFilterVisisble;
    console.log(isFilterVisisble);
  };

  var filter = function filter(event) {
    console.log(event.target.value);
    var text = event.target.value;

    if (text == null || text == "") {
      filteredProductList = [];
      products.forEach(function (element) {
        filteredProductList.push(element);
      });
    } else {
      filteredProductList = null;
      filteredProductList = [];
      filteredProductList = products.filter(function (pkg) {
        return pkg.descript.toUpperCase().indexOf(text.toUpperCase()) !== -1 || pkg.descript.toUpperCase().indexOf(text.toUpperCase()) !== -1;
      });
    }

    console.log(filteredProductList);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        httpEquiv: "x-ua-compatible",
        content: "ie=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("title", {
        children: "Jewelify"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "description",
        content: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("header", {
      className: "inner-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("nav", {
        className: "main-nav",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "nav-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "logo-wrapper",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                  src: "/img/logo.svg",
                  alt: "jwelify"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "prof-img",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                src: "/img/head-prof.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "wrapper ",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        id: "pricing-area",
        className: "pricing-area custom-border",
        style: {
          backgroundColor: "#f3fbfe"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "container pt-100",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "row",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "col-md-12 ",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "about-bottom-left mb-30 clearfix text-style text-center",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
                  children: ["Below Are The Products We Detected From JCS.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 21
                  }, this), " Does This Look Right?"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "row pb-100",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  "class": "row",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    "class": "col-md-3 input-outer",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                      children: "Search by keyword"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      "class": "form-group right-inner-addon input-container",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                        "class": "fa fa-search"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 149,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                        type: "text",
                        onKeyPress: increment,
                        "class": "form-control",
                        placeholder: "Type Keyword"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 150,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    "class": "col-md-3",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                      "class": "btn btn-custom",
                      onClick: increment,
                      children: ["Add Filter\xA0\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                        "class": "fa fa-search"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 47
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 159,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    "class": "col-md-3"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    "class": "col-md-3 add-prodcut",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                      "class": "btn btn-custom",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                        "class": "fa fa-plus"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 166,
                        columnNumber: 25
                      }, this), "\xA0\xA0Add Products"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 165,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  "class": "row",
                  children: count % 2 == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      "class": "col-md-2 input-outer",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                        children: "Company"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 175,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        "class": "form-group right-inner-addon input-container",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
                          "class": "form-control",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                            selected: true,
                            children: "All company"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 178,
                            columnNumber: 31
                          }, this), companies.map(function (companie) {
                            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                              children: companie
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 181,
                              columnNumber: 33
                            }, _this);
                          })]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 177,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 176,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 174,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      "class": "col-md-2 input-outer",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                        children: "Product Type"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 187,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        "class": "form-group right-inner-addon input-container",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
                          "class": "form-control",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                            selected: true,
                            children: "All Type"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 190,
                            columnNumber: 31
                          }, this), prodCategories.map(function (prodCategorie) {
                            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                              children: prodCategorie
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 192,
                              columnNumber: 33
                            }, _this);
                          })]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 189,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 188,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 186,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      "class": "col-md-2 input-outer",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                        children: "Min Stock"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 199,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        "class": "form-group right-inner-addon input-container",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                          type: "number",
                          "class": "form-control",
                          placeholder: "Type Price"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 202,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 200,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      "class": "col-md-2 input-outer",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                        children: "Max Stock"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 210,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        "class": "form-group right-inner-addon input-container",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                          type: "number",
                          "class": "form-control",
                          placeholder: "Type Price"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 213,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 209,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      "class": "col-md-2 input-outer",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                        children: "Min Price"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 222,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        "class": "form-group right-inner-addon input-container",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                          type: "number",
                          "class": "form-control",
                          placeholder: "Type Price"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 225,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 223,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      "class": "col-md-2 input-outer",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                        children: "Max Price"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 233,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        "class": "form-group right-inner-addon input-container",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                          type: "number",
                          "class": "form-control",
                          placeholder: "Type Price"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 236,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 234,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 232,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 23
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "col-12",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "horizontal-scrollable",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("table", {
                      className: "table table-borderless custom-tbl text-left mb-4",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("thead", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Category"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 253,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Stock No"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 254,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Style Number"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 255,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Brand"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 256,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Manufacturer"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 257,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Tag"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 258,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Store Code"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 259,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Product Name"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 260,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Company Name"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 261,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Company Code"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 262,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Quantity"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 263,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "SKU"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 264,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Buy Date"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 265,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Date Sold"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 266,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Short description"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 267,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Long description"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 268,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Cost"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 269,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Retail Price"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 270,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "On Sale"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 271,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Product Images"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 272,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Product Certificate Picture"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 273,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Certificate Number"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 274,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Laboratory Certification"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 275,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Attributes"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 276,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Shipping Length"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 277,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Shipping Width"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 278,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Shipping Height"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 279,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Jwewelary Type"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 280,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                            scope: "col",
                            children: "Assest ID"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 281,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 252,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 251,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tbody", {
                        children: filteredProductList.map(function (product) {
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
                            "class": "tbl-bg-white",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.category
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 287,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.stockNo
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 288,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.styleNUmber
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 289,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.brand
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 290,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.manufacturer
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 291,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.tag
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 292,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.storeCode
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 293,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.productName
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 294,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.companyName
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 295,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.companyCode
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 296,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.qty
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 297,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.sku
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 298,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.datebuy
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 299,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.datesold
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 300,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.shortDescription
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 301,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.longDescription
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 302,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.cost
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 303,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.retailPrice
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 304,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.onSale
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 305,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.productImages
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 306,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.prodCertificatePicture
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 307,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.certificateNumber
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 308,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.labCertification
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 309,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.attributes
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 310,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.shippingLength
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 311,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.shippingWidth
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 312,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.shippingHeight
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 313,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.jewelryType
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 314,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                              children: product.assetId
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 315,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 286,
                            columnNumber: 29
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 284,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 250,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 249,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                      className: "main-btn btn-m btn-block bg-light-blue mt-4 w-75",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        href: "",
                        children: "CONFIRM"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 323,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 322,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 321,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 326,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 327,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "contact-area",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "conatct-info fix",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "col-md-5 col-sm-4 text-style",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
                children: "Jewelify"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                children: ["Copyright \xA9 2021", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  href: "http://bootexperts.com/",
                  target: "_blank",
                  children: "Jewelify"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 345,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 348,
                  columnNumber: 19
                }, this), ".All right reserved."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 343,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "col-md-2 col-sm-4 footer-links text-style t-m-res",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                className: "mb-30",
                children: "Services"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 353,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                    href: "#",
                    children: "service - 1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 356,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 355,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                    href: "#",
                    children: "service - 2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 359,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 358,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                    href: "#",
                    children: "service - 3"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 362,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 361,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                    href: "#",
                    children: "service - 4"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 365,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 364,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 352,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "col-md-2 col-sm-4 footer-links text-style t-m-res",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                className: "mb-30",
                children: "Company"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 370,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                  children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                    href: "#",
                    children: "Work"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 374,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 372,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                    href: "#",
                    children: "About"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 377,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 376,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                    href: "#",
                    children: "Resources"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 380,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 379,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                    href: "#",
                    children: "Pricing"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 383,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 382,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 371,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 369,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "col-md-3 col-sm-4 text-style t-m-res",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                className: "mb-30",
                children: "Useful Links"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 388,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "footer-icon",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                        src: "/img/facebook.svg",
                        alt: "",
                        width: "20px"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 393,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 392,
                      columnNumber: 23
                    }, this), " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 391,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                        src: "/img/instagram.svg",
                        alt: "",
                        width: "20px"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 398,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 397,
                      columnNumber: 23
                    }, this), " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 396,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                        src: "/img/twitter.svg",
                        alt: "",
                        width: "20px"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 403,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 402,
                      columnNumber: 23
                    }, this), " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 401,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 390,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 389,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 387,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

_s(Layer10A, "YKsrXaES0ZK9063nUl9BnqoSVks=");

_c = Layer10A;

var _c;

$RefreshReg$(_c, "Layer10A");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRkUHJvZHVjdC4zZDM0NzNlMjk3OTgxOGI5ZjczZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlPLFFBQVEsR0FBRyxFQUFmO0FBQ0EsSUFBSUMsbUJBQW1CLEdBQUcsRUFBMUI7QUFFZSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQ2pDTCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZEUsSUFBQUEsZ0RBQUEsQ0FDTyxzREFEUCxFQUVHSyxJQUZILENBRVEsVUFBQ0MsR0FBRDtBQUFBLGFBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLElBQWhCLENBQVQ7QUFBQSxLQUZSLFdBR1MsVUFBQ0MsR0FBRDtBQUFBLGFBQVNILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxHQUFaLENBQVQ7QUFBQSxLQUhUO0FBSUQsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BQyxFQUFBQSxPQUFPLEdBQUcsQ0FDUjtBQUNFQyxJQUFBQSxRQUFRLEVBQUUsTUFEWjtBQUVFQyxJQUFBQSxPQUFPLEVBQUUsV0FGWDtBQUdFQyxJQUFBQSxXQUFXLEVBQUUsR0FIZjtBQUlFQyxJQUFBQSxLQUFLLEVBQUUsS0FKVDtBQUtFQyxJQUFBQSxZQUFZLEVBQUUsa0JBTGhCO0FBTUVDLElBQUFBLEdBQUcsRUFBRSxHQU5QO0FBT0VDLElBQUFBLFNBQVMsRUFBRSxLQVBiO0FBUUVDLElBQUFBLFdBQVcsRUFBRSxjQVJmO0FBU0VDLElBQUFBLFdBQVcsRUFBRSxXQVRmO0FBVUVDLElBQUFBLFdBQVcsRUFBRSxLQVZmO0FBV0VDLElBQUFBLEdBQUcsRUFBRSxHQVhQO0FBWUVDLElBQUFBLEdBQUcsRUFBRSxJQVpQO0FBYUVDLElBQUFBLE9BQU8sRUFBRSxXQWJYO0FBY0VDLElBQUFBLFFBQVEsRUFBRSxXQWRaO0FBZUVDLElBQUFB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SEYsZUFJRTtBQUFJLGlDQUFLLEVBQUMsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FKRixlQUtFO0FBQUksaUNBQUssRUFBQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUxGLGVBTUU7QUFBSSxpQ0FBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBTkYsZUFPRTtBQUFJLGlDQUFLLEVBQUMsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FQRixlQVFFO0FBQUksaUNBQUssRUFBQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQVJGLGVBU0U7QUFBSSxpQ0FBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBVEYsZUFVRTtBQUFJLGlDQUFLLEVBQUMsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FWRixlQVdFO0FBQUksaUNBQUssRUFBQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQVhGLGVBWUU7QUFBSSxpQ0FBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBWkYsZUFhRTtBQUFJLGlDQUFLLEVBQUMsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FiRixlQWNFO0FBQUksaUNBQUssRUFBQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQWRGLGVBZUU7QUFBSSxpQ0FBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBZkYsZUFnQkU7QUFBSSxpQ0FBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBaEJGLGVBaUJFO0FBQUksaUNBQUssRUFBQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQWpCRixlQWtCRTtBQUFJLGlDQUFLLEVBQUMsS0FB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QURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFHTyxHQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkEvQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOU9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMlVEOztHQXBhdUJyQzs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkUHJvZHVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmxldCBwcm9kdWN0cyA9IFtdO1xyXG5sZXQgZmlsdGVyZWRQcm9kdWN0TGlzdCA9IFtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5ZXIxMEEoKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEF4aW9zXHJcbiAgICAgIC5nZXQoXCJodHRwczovL2FwaS5qZXdlbGlmeS5haS8ubmV0bGlmeS9mdW5jdGlvbnMvaW52ZW50b3J5XCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcy5kYXRhKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcHJvZHVjdCA9IFtcclxuICAgIHtcclxuICAgICAgY2F0ZWdvcnk6IFwiMTAwM1wiLFxyXG4gICAgICBzdG9ja05vOiBcIi41MCBjdCB0d1wiLFxyXG4gICAgICBzdHlsZU5VbWJlcjogXCI1XCIsXHJcbiAgICAgIGJyYW5kOiBcIlRHVFwiLFxyXG4gICAgICBtYW51ZmFjdHVyZXI6IFwiRGlhIENvY2t0bCBSaW5nc1wiLFxyXG4gICAgICB0YWc6IFwiMVwiLFxyXG4gICAgICBzdG9yZUNvZGU6IFwiMDAxXCIsXHJcbiAgICAgIHByb2R1Y3ROYW1lOiBcIlRFU1RfUFJPRFVDVFwiLFxyXG4gICAgICBjb21wYW55TmFtZTogXCJURVNUIFRTRVRcIixcclxuICAgICAgY29tcGFueUNvZGU6IFwiMDAxXCIsXHJcbiAgICAgIHF0eTogXCI1XCIsXHJcbiAgICAgIHNrdTogXCIzMlwiLFxyXG4gICAgICBkYXRlYnV5OiBcIjE3LU5vdi0wNVwiLFxyXG4gICAgICBkYXRlc29sZDogXCIxMi1GZWItMjBcIixcclxuICAgICAgc2hvcnREZXNjcmlwdGlvbjogXCIuNTAgY3QgdHdcIixcclxuICAgICAgbG9uZ0Rlc2NyaXB0aW9uOiBcIi41MCBjdCB0d1wiLFxyXG4gICAgICBjb3N0OiBcIjkwMFwiLFxyXG4gICAgICByZXRhaWxQcmljZTogXCI5MDBcIixcclxuICAgICAgb25TYWxlOiBcIjkwMFwiLFxyXG4gICAgICBwcm9kdWN0SW1hZ2VzOiBcImVuY29kZWQgc3RyaW5nc1wiLFxyXG4gICAgICBwcm9kQ2VydGlmaWNhdGVQaWN0dXJlOiBcIlwiLFxyXG4gICAgICBjZXJ0aWZpY2F0ZU51bWJlcjogXCJaLTAwMTIzXCIsXHJcbiAgICAgIGxhYkNlcnRpZmljYXRpb246IFwiR0lBXCIsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IFwiXCIsXHJcbiAgICAgIHNoaXBwaW5nTGVuZ3RoOiBcIjEyXCIsXHJcbiAgICAgIHNoaXBwaW5nV2lkdGg6IFwiMTZcIixcclxuICAgICAgc2hpcHBpbmdIZWlnaHQ6IFwiXCIsXHJcbiAgICAgIGpld2VscnlUeXBlOiBcIlwiLFxyXG4gICAgICBhc3NldElkOiBcIjMyXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGZpbHRlcmVkUHJvZHVjdExpc3QgPSBbXTtcclxuXHJcbiAgbGV0IHByb2RDYXRlZ29yaWVzID0gW107XHJcbiAgbGV0IGNvbXBhbmllcyA9IFtdO1xyXG4gIGxldCBpc0ZpbHRlclZpc2lzYmxlID0gZmFsc2U7XHJcbiAgY29tcGFuaWVzLnB1c2goXCJUR1RcIik7XHJcbiAgcHJvZENhdGVnb3JpZXMucHVzaChcIkRpYSBDb2NrdGwgUmluZ3NcIik7XHJcbiAgcHJvZENhdGVnb3JpZXMucHVzaChcIkFua2xldFwiKTtcclxuICBwcm9kQ2F0ZWdvcmllcy5wdXNoKFwiUmluZ3NcIik7XHJcblxyXG4gIHByb2R1Y3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGZpbHRlcmVkUHJvZHVjdExpc3QucHVzaChlbGVtZW50KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBpbmNyZW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRDb3VudCgodikgPT4gdiArIDEpO1xyXG4gIH0sIFtzZXRDb3VudF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVGaWx0ZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGlzRmlsdGVyVmlzaWJpbGUgPSAhaXNGaWx0ZXJWaXNpc2JsZTtcclxuICAgIGNvbnNvbGUubG9nKGlzRmlsdGVyVmlzaXNibGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbHRlciA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IHRleHQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgaWYgKHRleHQgPT0gbnVsbCB8fCB0ZXh0ID09IFwiXCIpIHtcclxuICAgICAgZmlsdGVyZWRQcm9kdWN0TGlzdCA9IFtdO1xyXG4gICAgICBwcm9kdWN0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgZmlsdGVyZWRQcm9kdWN0TGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpbHRlcmVkUHJvZHVjdExpc3QgPSBudWxsO1xyXG4gICAgICBmaWx0ZXJlZFByb2R1Y3RMaXN0ID0gW107XHJcbiAgICAgIGZpbHRlcmVkUHJvZHVjdExpc3QgPSBwcm9kdWN0cy5maWx0ZXIoKHBrZykgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBwa2cuZGVzY3JpcHQudG9VcHBlckNhc2UoKS5pbmRleE9mKHRleHQudG9VcHBlckNhc2UoKSkgIT09IC0xIHx8XHJcbiAgICAgICAgICBwa2cuZGVzY3JpcHQudG9VcHBlckNhc2UoKS5pbmRleE9mKHRleHQudG9VcHBlckNhc2UoKSkgIT09IC0xXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWRQcm9kdWN0TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwieC11YS1jb21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIiAvPlxyXG4gICAgICAgIDx0aXRsZT5KZXdlbGlmeTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudCAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgey8qIEFkZCB5b3VyIHNpdGUgb3IgYXBwbGljYXRpb24gY29udGVudCBoZXJlICovfVxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImlubmVyLWhlYWRlclwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWFpbi1uYXZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2xvZ28uc3ZnXCIgYWx0PVwiandlbGlmeVwiIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwPjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9mLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2hlYWQtcHJvZi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyIFwiPlxyXG4gICAgICAgIHsvKiBwcmljaW5nIGFyZWFcclxuICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi99XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgaWQ9XCJwcmljaW5nLWFyZWFcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJpY2luZy1hcmVhIGN1c3RvbS1ib3JkZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmM2ZiZmVcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTEwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1ib3R0b20tbGVmdCBtYi0zMCBjbGVhcmZpeCB0ZXh0LXN0eWxlIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICBCZWxvdyBBcmUgVGhlIFByb2R1Y3RzIFdlIERldGVjdGVkIEZyb20gSkNTLlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPiBEb2VzIFRoaXMgTG9vayBSaWdodD9cclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcGItMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgaW5wdXQtb3V0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TZWFyY2ggYnkga2V5d29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByaWdodC1pbm5lci1hZGRvbiBpbnB1dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXtpbmNyZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBLZXl3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tY3VzdG9tXCIgb25DbGljaz17aW5jcmVtZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIEZpbHRlciZuYnNwOyZuYnNwOzxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGFkZC1wcm9kY3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1jdXN0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPiZuYnNwOyZuYnNwO0FkZCBQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3VudCAlIDIgPT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMiBpbnB1dC1vdXRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db21wYW55PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByaWdodC1pbm5lci1hZGRvbiBpbnB1dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5BbGwgY29tcGFueTwvb3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbXBhbmllcy5tYXAoKGNvbXBhbmllKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj57Y29tcGFuaWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTIgaW5wdXQtb3V0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBUeXBlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByaWdodC1pbm5lci1hZGRvbiBpbnB1dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5BbGwgVHlwZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZENhdGVnb3JpZXMubWFwKChwcm9kQ2F0ZWdvcmllKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj57cHJvZENhdGVnb3JpZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTIgaW5wdXQtb3V0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWluIFN0b2NrPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByaWdodC1pbm5lci1hZGRvbiBpbnB1dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIFByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTIgaW5wdXQtb3V0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWF4IFN0b2NrPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByaWdodC1pbm5lci1hZGRvbiBpbnB1dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIFByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yIGlucHV0LW91dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1pbiBQcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcmlnaHQtaW5uZXItYWRkb24gaW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3M9XCJmYSBmYS1zZWFyY2hcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yIGlucHV0LW91dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1heCBQcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcmlnaHQtaW5uZXItYWRkb24gaW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3M9XCJmYSBmYS1zZWFyY2hcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbC1zY3JvbGxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVybGVzcyBjdXN0b20tdGJsIHRleHQtbGVmdCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5DYXRlZ29yeTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdG9jayBObzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdHlsZSBOdW1iZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+QnJhbmQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TWFudWZhY3R1cmVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlRhZzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdG9yZSBDb2RlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByb2R1Y3QgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Db21wYW55IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q29tcGFueSBDb2RlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlNLVTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5CdXkgRGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5EYXRlIFNvbGQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U2hvcnQgZGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TG9uZyBkZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Db3N0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlJldGFpbCBQcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5PbiBTYWxlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByb2R1Y3QgSW1hZ2VzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByb2R1Y3QgQ2VydGlmaWNhdGUgUGljdHVyZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5DZXJ0aWZpY2F0ZSBOdW1iZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TGFib3JhdG9yeSBDZXJ0aWZpY2F0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkF0dHJpYnV0ZXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U2hpcHBpbmcgTGVuZ3RoPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlNoaXBwaW5nIFdpZHRoPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlNoaXBwaW5nIEhlaWdodDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Kd2V3ZWxhcnkgVHlwZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Bc3Nlc3QgSUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyZWRQcm9kdWN0TGlzdC5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRibC1iZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QuY2F0ZWdvcnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LnN0b2NrTm99PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LnN0eWxlTlVtYmVyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC5icmFuZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QubWFudWZhY3R1cmVyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC50YWd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LnN0b3JlQ29kZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QucHJvZHVjdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LmNvbXBhbnlOYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC5jb21wYW55Q29kZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QucXR5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC5za3V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LmRhdGVidXl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LmRhdGVzb2xkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC5zaG9ydERlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC5sb25nRGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LmNvc3R9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LnJldGFpbFByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC5vblNhbGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LnByb2R1Y3RJbWFnZXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LnByb2RDZXJ0aWZpY2F0ZVBpY3R1cmV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LmNlcnRpZmljYXRlTnVtYmVyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC5sYWJDZXJ0aWZpY2F0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC5hdHRyaWJ1dGVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC5zaGlwcGluZ0xlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3Quc2hpcHBpbmdXaWR0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3Quc2hpcHBpbmdIZWlnaHR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0Lmpld2VscnlUeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC5hc3NldElkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtYWluLWJ0biBidG4tbSBidG4tYmxvY2sgYmctbGlnaHQtYmx1ZSBtdC00IHctNzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPkNPTkZJUk08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogY29udGFjdCBhcmVhXHJcbiAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtYXJlYVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmF0Y3QtaW5mbyBmaXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IGNvbC1zbS00IHRleHQtc3R5bGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5KZXdlbGlmeTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0IMKpIDIwMjFcclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9ib290ZXhwZXJ0cy5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSmV3ZWxpZnlcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgLkFsbCByaWdodCByZXNlcnZlZC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIGNvbC1zbS00IGZvb3Rlci1saW5rcyB0ZXh0LXN0eWxlIHQtbS1yZXNcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0zMFwiPlNlcnZpY2VzPC9oMz5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+c2VydmljZSAtIDE8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnNlcnZpY2UgLSAyPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5zZXJ2aWNlIC0gMzwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+c2VydmljZSAtIDQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29sLXNtLTQgZm9vdGVyLWxpbmtzIHRleHQtc3R5bGUgdC1tLXJlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTMwXCI+Q29tcGFueTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Xb3JrPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5BYm91dDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+UmVzb3VyY2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5QcmljaW5nPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC1zbS00IHRleHQtc3R5bGUgdC1tLXJlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTMwXCI+VXNlZnVsIExpbmtzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvZmFjZWJvb2suc3ZnXCIgYWx0PVwiXCIgd2lkdGg9XCIyMHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2luc3RhZ3JhbS5zdmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjIwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvdHdpdHRlci5zdmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjIwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7Lyogc3RhcnQgc2Nyb2xsVXBcclxuICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi99XHJcbiAgICAgIHsvKjxkaXYgaWQ9XCJ0b1RvcFwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXVwXCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICA8L2Rpdj4qL31cclxuICAgICAgey8qIGpxdWVyeVxyXG5cdFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi99XHJcbiAgICAgIHsvKiBib290c3RyYXAgSlNcclxuXHRcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovfVxyXG4gICAgICB7LyogcGx1Z2lucyBKU1xyXG5cdFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi99XHJcbiAgICAgIHsvKiBtYWluIEpTXHJcblx0XHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiQXhpb3MiLCJwcm9kdWN0cyIsImZpbHRlcmVkUHJvZHVjdExpc3QiLCJMYXllcjEwQSIsImdldCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVyciIsInByb2R1Y3QiLCJjYXRlZ29yeSIsInN0b2NrTm8iLCJzdHlsZU5VbWJlciIsImJyYW5kIiwibWFudWZhY3R1cmVyIiwidGFnIiwic3RvcmVDb2RlIiwicHJvZHVjdE5hbWUiLCJjb21wYW55TmFtZSIsImNvbXBhbnlDb2RlIiwicXR5Iiwic2t1IiwiZGF0ZWJ1eSIsImRhdGVzb2xkIiwic2hvcnREZXNjcmlwdGlvbiIsImxvbmdEZXNjcmlwdGlvbiIsImNvc3QiLCJyZXRhaWxQcmljZSIsIm9uU2FsZSIsInByb2R1Y3RJbWFnZXMiLCJwcm9kQ2VydGlmaWNhdGVQaWN0dXJlIiwiY2VydGlmaWNhdGVOdW1iZXIiLCJsYWJDZXJ0aWZpY2F0aW9uIiwiYXR0cmlidXRlcyIsInNoaXBwaW5nTGVuZ3RoIiwic2hpcHBpbmdXaWR0aCIsInNoaXBwaW5nSGVpZ2h0IiwiamV3ZWxyeVR5cGUiLCJhc3NldElkIiwicHJvZENhdGVnb3JpZXMiLCJjb21wYW5pZXMiLCJpc0ZpbHRlclZpc2lzYmxlIiwicHVzaCIsImZvckVhY2giLCJlbGVtZW50IiwiY291bnQiLCJzZXRDb3VudCIsImluY3JlbWVudCIsInYiLCJoYW5kbGVGaWx0ZXIiLCJldmVudCIsImlzRmlsdGVyVmlzaWJpbGUiLCJmaWx0ZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHQiLCJwa2ciLCJkZXNjcmlwdCIsInRvVXBwZXJDYXNlIiwiaW5kZXhPZiIsImJhY2tncm91bmRDb2xvciIsIm1hcCIsImNvbXBhbmllIiwicHJvZENhdGVnb3JpZSJdLCJzb3VyY2VSb290IjoiIn0=