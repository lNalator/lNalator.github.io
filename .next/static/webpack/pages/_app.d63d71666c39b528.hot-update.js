"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.mjs\");\n/* harmony import */ var _components_Header_HeaderMegaMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/HeaderMegaMenu */ \"./src/components/Header/HeaderMegaMenu.tsx\");\n\n\n\nconst theme = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.createTheme)({\n});\nfunction App(param) {\n    let { Component, pageProps } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.MantineProvider, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.AppShell, {\n                header: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.AppShell.Header, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_HeaderMegaMenu__WEBPACK_IMPORTED_MODULE_1__.HeaderMegaMenu, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\emido\\\\Documents\\\\GitHub\\\\lNalator.github.io\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\emido\\\\Documents\\\\GitHub\\\\lNalator.github.io\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\emido\\\\Documents\\\\GitHub\\\\lNalator.github.io\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\emido\\\\Documents\\\\GitHub\\\\lNalator.github.io\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\emido\\\\Documents\\\\GitHub\\\\lNalator.github.io\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3VFO0FBQ0Y7QUFFckUsTUFBTUksUUFBUUgsMERBQVdBLENBQUM7QUFFMUI7QUFFZSxTQUFTSSxJQUFJLEtBQWtDO1FBQWxDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZLEdBQWxDO0lBQzFCLHFCQUNFLDhEQUFDTCwwREFBZUE7UUFBQ0UsT0FBT0E7OzBCQUN0Qiw4REFBQ0osbURBQVFBO2dCQUFDUSxNQUFNOzBCQUNkLDRFQUFDUixtREFBUUEsQ0FBQ1MsTUFBTTs4QkFDZCw0RUFBQ04sNkVBQWNBOzs7Ozs7Ozs7Ozs7Ozs7MEJBR25CLDhEQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7WUFBSzs7Ozs7OztBQUduQztLQVh3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyBBcHBTaGVsbCwgY3JlYXRlVGhlbWUsIE1hbnRpbmVQcm92aWRlciB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XHJcbmltcG9ydCB7IEhlYWRlck1lZ2FNZW51IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlck1lZ2FNZW51XCI7XHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICAvKiogUHV0IHlvdXIgbWFudGluZSB0aGVtZSBvdmVycmlkZSBoZXJlICovXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1hbnRpbmVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8QXBwU2hlbGwgaGVhZGVyPlxyXG4gICAgICAgIDxBcHBTaGVsbC5IZWFkZXI+XHJcbiAgICAgICAgICA8SGVhZGVyTWVnYU1lbnUgLz5cclxuICAgICAgICA8L0FwcFNoZWxsLkhlYWRlcj5cclxuICAgICAgPC9BcHBTaGVsbD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPntcIiBcIn1cclxuICAgIDwvTWFudGluZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkFwcFNoZWxsIiwiY3JlYXRlVGhlbWUiLCJNYW50aW5lUHJvdmlkZXIiLCJIZWFkZXJNZWdhTWVudSIsInRoZW1lIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaGVhZGVyIiwiSGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});