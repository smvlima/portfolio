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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/scrollbar */ \"./node_modules/swiper/modules/scrollbar/scrollbar.min.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _components_front_page_frontpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/front-page/frontpage */ \"./components/front-page/frontpage.tsx\");\n/* harmony import */ var _components_about_me_aboutme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/about-me/aboutme */ \"./components/about-me/aboutme.tsx\");\n/* harmony import */ var _components_my_skills_myskills__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/my-skills/myskills */ \"./components/my-skills/myskills.tsx\");\n/* harmony import */ var _components_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/portfolio/portfolio */ \"./components/portfolio/portfolio.tsx\");\n/* harmony import */ var _components_blog_blog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/blog/blog */ \"./components/blog/blog.tsx\");\n/* harmony import */ var _components_contact_me_contactme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/contact-me/contactme */ \"./components/contact-me/contactme.tsx\");\n/* harmony import */ var _components_project_project__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/project/project */ \"./components/project/project.tsx\");\n/* harmony import */ var _components_post_post__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/post/post */ \"./components/post/post.tsx\");\n/* harmony import */ var _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/sidebar/sidebar */ \"./components/sidebar/sidebar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _atoms_menu_atoms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../atoms/menu/atoms */ \"./atoms/menu/atoms.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n// Import Swiper styles\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(0), projectId = ref[0], setProjectId = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(0), postId = ref1[0], setPostId = ref1[1];\n    var showOrHide = (0,recoil__WEBPACK_IMPORTED_MODULE_17__.useRecoilValue)(_atoms_menu_atoms__WEBPACK_IMPORTED_MODULE_16__.menuEnabledAtom);\n    var onSelectProject = function(id) {\n        setProjectId(id);\n    };\n    var onSelectPost = function(id) {\n        setPostId(id);\n    };\n    var onResetProject = function(zero) {\n        setProjectId(zero);\n    };\n    var onResetPost = function(zero) {\n        setPostId(zero);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"O meu portf\\xf3lio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_18___default().container),\n                \"data-amount\": \"\".concat(showOrHide),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_18___default().nav),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_18___default().main),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_front_page_frontpage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_about_me_aboutme__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_my_skills_myskills__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                selectProject: onSelectProject\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_blog_blog__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                selectPost: onSelectPost\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contact_me_contactme__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project_project__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                project: projectId,\n                                resetProject: onResetProject\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_post__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                post: postId,\n                                resetPost: onResetPost,\n                                selectPost: onSelectPost\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\index.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"UbfBxac4PH4GUVPMTS5K/7CxjkY=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_17__.useRecoilValue\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UixJQUFJOztRQUdXRCxtREFBYzs7O0FBSDdCQyxLQUFBQSxJQUFJO0FBdURWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbi8vIEltcG9ydCBTd2lwZXIgc3R5bGVzXHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL3Njcm9sbGJhclwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3NcIjtcclxuXHJcbmltcG9ydCBGcm9udHBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvZnJvbnQtcGFnZS9mcm9udHBhZ2VcIjtcclxuaW1wb3J0IEFib3V0bWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWJvdXQtbWUvYWJvdXRtZVwiO1xyXG5pbXBvcnQgTXlza2lsbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvbXktc2tpbGxzL215c2tpbGxzXCI7XHJcbmltcG9ydCBQb3J0Zm9saW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9ydGZvbGlvL3BvcnRmb2xpb1wiO1xyXG5pbXBvcnQgQmxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9ibG9nL2Jsb2dcIjtcclxuaW1wb3J0IENvbnRhY3RtZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250YWN0LW1lL2NvbnRhY3RtZVwiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9qZWN0L3Byb2plY3RcIjtcclxuaW1wb3J0IFBvc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdC9wb3N0XCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuLi9hdG9tcy9tZW51L21lbnVcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtZW51RW5hYmxlZEF0b20gfSBmcm9tIFwiLi4vYXRvbXMvbWVudS9hdG9tc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9qZWN0SWQsIHNldFByb2plY3RJZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcG9zdElkLCBzZXRQb3N0SWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgc2hvd09ySGlkZSA9IHVzZVJlY29pbFZhbHVlKG1lbnVFbmFibGVkQXRvbSk7XHJcblxyXG4gIGNvbnN0IG9uU2VsZWN0UHJvamVjdCA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRQcm9qZWN0SWQoaWQpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TZWxlY3RQb3N0ID0gKGlkOiBudW1iZXIpID0+IHtcclxuICAgIHNldFBvc3RJZChpZCk7XHJcbiAgfTtcclxuICBjb25zdCBvblJlc2V0UHJvamVjdCA9ICh6ZXJvOiBudW1iZXIpID0+IHtcclxuICAgIHNldFByb2plY3RJZCh6ZXJvKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uUmVzZXRQb3N0ID0gKHplcm86IG51bWJlcikgPT4ge1xyXG4gICAgc2V0UG9zdElkKHplcm8pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TyBtZXUgcG9ydGbDs2xpbzwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCJcclxuICAgICAgICA+PC9tZXRhPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBkYXRhLWFtb3VudD17YCR7c2hvd09ySGlkZX1gfT4gICAgICAgICAgXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgICAgPFNpZGViYXIvPlxyXG4gICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgIDxGcm9udHBhZ2UgLz5cclxuICAgICAgICAgIDxBYm91dG1lIC8+XHJcbiAgICAgICAgICA8TXlza2lsbHMgLz5cclxuICAgICAgICAgIDxQb3J0Zm9saW8gc2VsZWN0UHJvamVjdD17b25TZWxlY3RQcm9qZWN0fSAvPlxyXG4gICAgICAgICAgPEJsb2cgc2VsZWN0UG9zdD17b25TZWxlY3RQb3N0fSAvPlxyXG4gICAgICAgICAgPENvbnRhY3RtZSAvPlxyXG4gICAgICAgICAgPFByb2plY3QgcHJvamVjdD17cHJvamVjdElkfSByZXNldFByb2plY3Q9e29uUmVzZXRQcm9qZWN0fSAvPlxyXG4gICAgICAgICAgPFBvc3RcclxuICAgICAgICAgICAgcG9zdD17cG9zdElkfVxyXG4gICAgICAgICAgICByZXNldFBvc3Q9e29uUmVzZXRQb3N0fVxyXG4gICAgICAgICAgICBzZWxlY3RQb3N0PXtvblNlbGVjdFBvc3R9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJGcm9udHBhZ2UiLCJBYm91dG1lIiwiTXlza2lsbHMiLCJQb3J0Zm9saW8iLCJCbG9nIiwiQ29udGFjdG1lIiwiUHJvamVjdCIsIlBvc3QiLCJTaWRlYmFyIiwidXNlU3RhdGUiLCJtZW51RW5hYmxlZEF0b20iLCJ1c2VSZWNvaWxWYWx1ZSIsIkhvbWUiLCJwcm9qZWN0SWQiLCJzZXRQcm9qZWN0SWQiLCJwb3N0SWQiLCJzZXRQb3N0SWQiLCJzaG93T3JIaWRlIiwib25TZWxlY3RQcm9qZWN0IiwiaWQiLCJvblNlbGVjdFBvc3QiLCJvblJlc2V0UHJvamVjdCIsInplcm8iLCJvblJlc2V0UG9zdCIsImRpdiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJkYXRhLWFtb3VudCIsIm5hdiIsIm1haW4iLCJzZWxlY3RQcm9qZWN0Iiwic2VsZWN0UG9zdCIsInByb2plY3QiLCJyZXNldFByb2plY3QiLCJwb3N0IiwicmVzZXRQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});