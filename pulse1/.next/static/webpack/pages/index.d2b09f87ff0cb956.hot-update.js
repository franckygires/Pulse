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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PostProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PostProfile */ \"./components/PostProfile.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n//import Footer from \"../components/Footer\";\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\n//import { Navigate, useNavigate } from \"react-router-dom\";\nfunction Home(param) {\n    var posts = param.posts;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), user = ref[0], setUser = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var users = JSON.parse(localStorage.getItem(\"data\"));\n        if (!users) {\n            window.location = \"/login\";\n        } else {\n            //console.log(users)\n            setUser(users);\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1\"\n                }, void 0, false, {\n                    fileName: \"/home/francky/Rendu/Pulse/pulse1/pages/index.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/francky/Rendu/Pulse/pulse1/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex flex-column min-vh-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/francky/Rendu/Pulse/pulse1/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card\",\n                            children: !posts || posts.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"No added profile\"\n                            }, void 0, false, {\n                                fileName: \"/home/francky/Rendu/Pulse/pulse1/pages/index.js\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex w-100 justify-content-center\",\n                                style: {\n                                    flexWrap: \"wrap\"\n                                },\n                                children: posts.map(function(post, i) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        post: post\n                                    }, i, false, {\n                                        fileName: \"/home/francky/Rendu/Pulse/pulse1/pages/index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/francky/Rendu/Pulse/pulse1/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/francky/Rendu/Pulse/pulse1/pages/index.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/francky/Rendu/Pulse/pulse1/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/francky/Rendu/Pulse/pulse1/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/francky/Rendu/Pulse/pulse1/pages/index.js\",\n        lineNumber: 34,\n        columnNumber: 7\n    }, this));\n};\n_s(Home, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFJVjtBQUN6QyxFQUE0QztBQUVEO0FBRWY7OztBQUU1QixFQUEyRDtBQUU1QyxRQUFRLENBQUNLLElBQUksQ0FBRSxLQUFTLEVBQUUsQ0FBQztRQUFWQyxLQUFLLEdBQVAsS0FBUyxDQUFQQSxLQUFLOzs7SUFFbkMsR0FBSyxDQUFtQkosR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBOUJLLElBQUksR0FBYUwsR0FBYyxLQUF6Qk0sT0FBTyxHQUFJTixHQUFjO0lBQ3RDQyxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUViLEdBQUssQ0FBQ00sS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTTtRQUNwRCxFQUFFLEdBQUVKLEtBQUssRUFBRSxDQUFDO1lBQ1ZLLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHLENBQVE7UUFDNUIsQ0FBQyxNQUVELENBQUM7WUFDRSxFQUFvQjtZQUNuQlAsT0FBTyxDQUFDQyxLQUFLO1FBQ2pCLENBQUM7SUFFTCxDQUFDO0lBR0MsTUFBTSw2RUFFSE8sQ0FBRzs7d0ZBRURaLGtEQUFJO3NHQUVKYSxDQUFJO29CQUFDQyxJQUFJLEVBQUMsQ0FBVTtvQkFBQ0MsT0FBTyxFQUFDLENBQXFDOzs7Ozs7Ozs7Ozt3RkFJcEVILENBQUc7Z0JBQUNJLFNBQVMsRUFBQyxDQUErQjs7Z0dBQzNDbkIsMERBQU07Ozs7O2dHQUNOb0IsQ0FBSTs4R0FDRkwsQ0FBRzs0QkFBQ0ksU0FBUyxFQUFDLENBQU07dUNBQ2pCZCxLQUFLLElBQUlBLEtBQUssQ0FBQ2dCLE1BQU0sS0FBSyxDQUFDLCtFQUMxQkMsQ0FBRTswQ0FBQyxDQUFnQjs7Ozs7bUhBRW5CUCxDQUFHO2dDQUNGSSxTQUFTLEVBQUMsQ0FBcUM7Z0NBQy9DSSxLQUFLLEVBQUUsQ0FBQztvQ0FBQ0MsUUFBUSxFQUFFLENBQU07Z0NBQUMsQ0FBQzswQ0FFMUJuQixLQUFLLENBQUNvQixHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUVDLENBQUM7a0RBQ2pCLE1BQU0sK0RBQUw1QiwrREFBVzt3Q0FBQzJCLElBQUksRUFBRUEsSUFBSTt1Q0FBT0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYWpELENBQUM7R0FyRHVCdkIsSUFBSTtLQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3RQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RQcm9maWxlXCI7XG4vL2ltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbi8vaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbi8vaW1wb3J0IHsgTmF2aWdhdGUsIHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSAoeyBwb3N0cyB9KSB7XG5cbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgXG4gICAgICBjb25zdCB1c2VycyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXRhXCIpKTtcbiAgICAgIGlmKCF1c2Vycykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9sb2dpblwiXG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgICAvL2NvbnNvbGUubG9nKHVzZXJzKVxuICAgICAgICAgIHNldFVzZXIodXNlcnMpOyAgIFxuICAgICAgfVxuICAgICBcbiAgfSwgKTtcblxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgXG4gICAgICAgIDxIZWFkPlxuICBcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxuICBcbiAgXG4gICAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgIHshcG9zdHMgfHwgcG9zdHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICA8aDI+Tm8gYWRkZWQgcHJvZmlsZTwvaDI+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IHctMTAwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZsZXhXcmFwOiBcIndyYXBcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFBvc3RQcm9maWxlIHBvc3Q9e3Bvc3R9IGtleT17aX0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cblxuXG4gXG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG5cblxuICAgIGxldCBkYXRhID0gW107XG4gIGF3YWl0IGF4aW9zXG4gICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJvZmlsc1wiKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKTtcbiAgICAgIGRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0czogZGF0YSxcbiAgICB9LFxuICB9O1xuXG5cbiAgXG59XG4iXSwibmFtZXMiOlsiUG9zdFByb2ZpbGUiLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJIb21lIiwicG9zdHMiLCJ1c2VyIiwic2V0VXNlciIsInVzZXJzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIndpbmRvdyIsImxvY2F0aW9uIiwiZGl2IiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiY2xhc3NOYW1lIiwibWFpbiIsImxlbmd0aCIsImgyIiwic3R5bGUiLCJmbGV4V3JhcCIsIm1hcCIsInBvc3QiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});