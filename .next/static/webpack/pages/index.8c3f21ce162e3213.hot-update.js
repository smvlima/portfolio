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

/***/ "./atoms/menu/menu.tsx":
/*!*****************************!*\
  !*** ./atoms/menu/menu.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_menu_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu.module.scss */ \"./atoms/menu/menu.module.scss\");\n/* harmony import */ var _menu_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_menu_menu_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atoms */ \"./atoms/menu/atoms.ts\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Menu = function() {\n    var showOrHideMenu = function showOrHideMenu() {\n        setVisible(!visible);\n    };\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_atoms__WEBPACK_IMPORTED_MODULE_2__.menuEnabledAtom), 2), visible = ref[0], setVisible = ref[1];\n    if (visible === true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_menu_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cta),\n                onClick: function() {\n                    showOrHideMenu();\n                    console.log(\"\".concat(visible, \"menu\"));\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineMenu, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\atoms\\\\menu\\\\menu.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\atoms\\\\menu\\\\menu.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_menu_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().close),\n                onClick: function() {\n                    showOrHideMenu();\n                    console.log(\"\".concat(visible, \"menu\"));\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiX, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\atoms\\\\menu\\\\menu.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\S\\xedlvia Lima~\\\\Documents\\\\GitHub\\\\portfolio\\\\atoms\\\\menu\\\\menu.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false);\n    }\n};\n_s(Menu, \"/eNGuHwoOXHSiaDDphU4QgDftPo=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState\n    ];\n});\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hdG9tcy9tZW51L21lbnUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUE4QztBQUNUO0FBQ1U7QUFDUDtBQUNFO0FBRTFDLElBQU1LLElBQUksR0FBRyxXQUFNO1FBR1JDLGNBQWMsR0FBdkIsU0FBU0EsY0FBYyxHQUFHO1FBQ3hCQyxVQUFVLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7SUFKRCxJQUE4QkwsR0FBK0Isb0ZBQS9CQSxzREFBYyxDQUFDQyxtREFBZSxDQUFDLE1BQXRESSxPQUFPLEdBQWdCTCxHQUErQixHQUEvQyxFQUFFSSxVQUFVLEdBQUlKLEdBQStCLEdBQW5DO0lBTTFCLElBQUlLLE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDcEIscUJBQ0U7c0JBQ0UsNEVBQUNDLFFBQU07Z0JBQ0xDLFNBQVMsRUFBRVYsbUVBQVU7Z0JBQ3JCWSxPQUFPLEVBQUUsV0FBTTtvQkFDYk4sY0FBYyxFQUFFLENBQUM7b0JBQ2pCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxFQUFDLENBQVUsTUFBSSxDQUFaTixPQUFPLEVBQUMsTUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsQ0FBQzswQkFFRCw0RUFBQ04seURBQWE7Ozs7eUJBQUc7Ozs7O3FCQUNWO3lCQUNSLENBQ0g7SUFDSixPQUFPO1FBRUwscUJBQ0E7c0JBQ0UsNEVBQUNPLFFBQU07Z0JBQ0xDLFNBQVMsRUFBRVYscUVBQVk7Z0JBQ3ZCWSxPQUFPLEVBQUUsV0FBTTtvQkFDYk4sY0FBYyxFQUFFLENBQUM7b0JBQ2pCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxFQUFDLENBQVUsTUFBSSxDQUFaTixPQUFPLEVBQUMsTUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsQ0FBQzswQkFFRCw0RUFBQ1AsK0NBQUc7Ozs7eUJBQUc7Ozs7O3FCQUNBO3lCQUNSLENBQ0o7SUFBQSxDQUFDO0FBQ0osQ0FBQztHQXBDS0ksSUFBSTs7UUFDc0JGLGtEQUFjOzs7QUFEeENFLEtBQUFBLElBQUk7QUFzQ1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hdG9tcy9tZW51L21lbnUudHN4PzQxMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vbWVudS9tZW51Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IEZpWCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5pbXBvcnQgeyBtZW51RW5hYmxlZEF0b20gfSBmcm9tIFwiLi9hdG9tc1wiO1xyXG5cclxuY29uc3QgTWVudSA9ICgpID0+IHtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VSZWNvaWxTdGF0ZShtZW51RW5hYmxlZEF0b20pO1xyXG5cclxuICBmdW5jdGlvbiBzaG93T3JIaWRlTWVudSgpIHtcclxuICAgIHNldFZpc2libGUoIXZpc2libGUpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHZpc2libGUgPT09IHRydWUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY3RhfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzaG93T3JIaWRlTWVudSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt2aXNpYmxlfW1lbnVgKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFpT3V0bGluZU1lbnUgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzaG93T3JIaWRlTWVudSgpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYCR7dmlzaWJsZX1tZW51YCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGaVggLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8Lz5cclxuICApfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkZpWCIsIkFpT3V0bGluZU1lbnUiLCJ1c2VSZWNvaWxTdGF0ZSIsIm1lbnVFbmFibGVkQXRvbSIsIk1lbnUiLCJzaG93T3JIaWRlTWVudSIsInNldFZpc2libGUiLCJ2aXNpYmxlIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiY3RhIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./atoms/menu/menu.tsx\n"));

/***/ })

});