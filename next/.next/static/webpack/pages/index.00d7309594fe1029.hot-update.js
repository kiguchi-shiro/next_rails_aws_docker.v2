"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _components_ArticleCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ArticleCard */ \"./src/components/ArticleCard.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles */ \"./src/styles/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/pages/index.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n  var url = \"http://localhost:3000/api/v1\" + '/articles';\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_7__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 21\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 21\n  }, _this);\n  var articles = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.articles);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n    css: _styles__WEBPACK_IMPORTED_MODULE_6__.styles.pageMinHeight,\n    sx: {\n      backgroundColor: '#e6f2ff'\n    },\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Container, {\n      maxWidth: \"md\",\n      sx: {\n        pt: 6\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n        container: true,\n        spacing: 4,\n        children: articles.map(function (article, i) {\n          return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n            item: true,\n            xs: 12,\n            md: 6,\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: '/articles/' + article.id,\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ArticleCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: article.title,\n                fromToday: article.fromToday,\n                userName: article.user.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, _this)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n_s(Index, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0RBQWVBLEtBQUs7QUFBQSxJQUFBcUMsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgR3JpZCwgQ29udGFpbmVyLCBQYWdpbmF0aW9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBjYW1lbGNhc2VLZXlzIGZyb20gJ2NhbWVsY2FzZS1rZXlzJ1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCBBcnRpY2xlQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvQXJ0aWNsZUNhcmQnXG5pbXBvcnQgRXJyb3IgZnJvbSAnQC9jb21wb25lbnRzL0Vycm9yJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnQC9jb21wb25lbnRzL0xvYWRpbmcnXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICdAL3N0eWxlcydcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICdAL3V0aWxzJ1xuXG50eXBlIEFydGljbGVQcm9wcyA9IHtcbiAgaWQ6IG51bWJlclxuICB0aXRsZTogc3RyaW5nXG4gIGNyZWF0ZWRBdDogc3RyaW5nXG4gIGZyb21Ub2RheTogc3RyaW5nXG4gIHVzZXI6IHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBJbmRleDogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCArICcvYXJ0aWNsZXMnXG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKHVybCwgZmV0Y2hlcilcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yIC8+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxMb2FkaW5nIC8+XG5cbiAgY29uc3QgYXJ0aWNsZXMgPSBjYW1lbGNhc2VLZXlzKGRhdGEuYXJ0aWNsZXMpXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17c3R5bGVzLnBhZ2VNaW5IZWlnaHR9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNlNmYyZmYnIH19PlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCIgc3g9e3sgcHQ6IDYgfX0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cbiAgICAgICAgICB7YXJ0aWNsZXMubWFwKChhcnRpY2xlOiBBcnRpY2xlUHJvcHMsIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgPEdyaWQga2V5PXtpfSBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2FydGljbGVzLycgKyBhcnRpY2xlLmlkfT5cbiAgICAgICAgICAgICAgICA8QXJ0aWNsZUNhcmRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXthcnRpY2xlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgZnJvbVRvZGF5PXthcnRpY2xlLmZyb21Ub2RheX1cbiAgICAgICAgICAgICAgICAgIHVzZXJOYW1lPXthcnRpY2xlLnVzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXSwibmFtZXMiOlsiQm94IiwiR3JpZCIsIkNvbnRhaW5lciIsImNhbWVsY2FzZUtleXMiLCJMaW5rIiwidXNlU1dSIiwiQXJ0aWNsZUNhcmQiLCJFcnJvciIsIkxvYWRpbmciLCJzdHlsZXMiLCJmZXRjaGVyIiwianN4REVWIiwiX2pzeERFViIsIkluZGV4IiwiX3MiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIiwiX3VzZVNXUiIsImRhdGEiLCJlcnJvciIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwiYXJ0aWNsZXMiLCJjc3MiLCJwYWdlTWluSGVpZ2h0Iiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGlsZHJlbiIsIm1heFdpZHRoIiwicHQiLCJjb250YWluZXIiLCJzcGFjaW5nIiwibWFwIiwiYXJ0aWNsZSIsImkiLCJpdGVtIiwieHMiLCJtZCIsImhyZWYiLCJpZCIsInRpdGxlIiwiZnJvbVRvZGF5IiwidXNlck5hbWUiLCJ1c2VyIiwibmFtZSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});