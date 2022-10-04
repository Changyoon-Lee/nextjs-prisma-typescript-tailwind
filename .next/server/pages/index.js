"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./libs/client/useUser.ts":
/*!********************************!*\
  !*** ./libs/client/useUser.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction useUser() {\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(`/api/users/me`).then((res)=>res.json()\n        ).then((data)=>{\n            if (!data.ok) {\n                return router.replace(\"/log-in\");\n            }\n            setUser(data.profile);\n        });\n    }, [\n        router\n    ]);\n    return user;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL2NsaWVudC91c2VVc2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3dDO0FBQ0k7QUFFN0IsU0FBU0csT0FBTyxHQUFHO0lBQzlCLE1BQU0sRUFMVixHQUtXQyxJQUFJLEdBTGYsR0FLaUJDLE9BQU8sTUFBSUgsK0NBQVEsRUFBRTtJQUNsQyxNQUFNSSxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUJDLGdEQUFTLENBQUMsSUFBTTtRQUNaTSxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUNqQkMsSUFBSSxDQUFDQyxDQUFBQSxHQUFHLEdBQUlBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO1FBQUEsQ0FBQyxDQUN2QkYsSUFBSSxDQUFDRyxDQUFBQSxJQUFJLEdBQUk7WUFDVixJQUFJLENBQUNBLElBQUksQ0FBQ0MsRUFBRSxFQUFFO2dCQUNWLE9BQU9OLE1BQU0sQ0FBQ08sT0FBTyxDQUFDLFNBQVMsQ0FBQzthQUNuQztZQUNEUixPQUFPLENBQUNNLElBQUksQ0FBQ0csT0FBTyxDQUFDLENBQUM7U0FDekIsQ0FBQztLQUNULEVBQUU7UUFBQ1IsTUFBTTtLQUFDLENBQUM7SUFFWixPQUFPRixJQUFJLENBQUM7Q0FDZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWJzL2NsaWVudC91c2VVc2VyLnRzPzJhZGEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVXNlcigpIHtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKGAvYXBpL3VzZXJzL21lYClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShcIi9sb2ctaW5cIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0VXNlcihkYXRhLnByb2ZpbGUpO1xuICAgICAgICAgICAgfSlcbiAgICB9LCBbcm91dGVyXSlcblxuICAgIHJldHVybiB1c2VyO1xufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVVzZXIiLCJ1c2VyIiwic2V0VXNlciIsInJvdXRlciIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwib2siLCJyZXBsYWNlIiwicHJvZmlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./libs/client/useUser.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_client_useUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/client/useUser */ \"./libs/client/useUser.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// 로그인 여부 확인, 로그인이 되어있다면 홈페이지를 그렇지않다면 계정 생성/로그인 페이지로 이동\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const user = (0,_libs_client_useUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    console.log(user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Hello\"\n        }, void 0, false, {\n            fileName: \"/Users/yoon/Documents/workspace/nextjs-prisma-typescript-tailwind-blueprint-forked/pages/index.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yoon/Documents/workspace/nextjs-prisma-typescript-tailwind-blueprint-forked/pages/index.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBMkM7QUFDakI7QUFDMUI7QUFDQSxpRUFBZSxJQUFNO0lBQ25CLE1BQU1FLElBQUksR0FBR0YsZ0VBQU8sRUFBRTtJQUN0QkcsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztJQUVqQixxQkFDRSw4REFBQ0csS0FBRztrQkFDRiw0RUFBQ0MsSUFBRTtzQkFBQyxPQUFLOzs7OztxQkFBSzs7Ozs7aUJBQ1YsQ0FDUDtDQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVVzZXIgZnJvbSBcIkBsaWJzL2NsaWVudC91c2VVc2VyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyDroZzqt7jsnbgg7Jes67aAIO2ZleyduCwg66Gc6re47J247J20IOuQmOyWtOyeiOuLpOuptCDtmYjtjpjsnbTsp4Drpbwg6re466CH7KeA7JWK64uk66m0IOqzhOyglSDsg53shLEv66Gc6re47J24IO2OmOydtOyngOuhnCDsnbTrj5lcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgdXNlciA9IHVzZVVzZXIoKTtcbiAgY29uc29sZS5sb2codXNlcilcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+SGVsbG88L2gxPlxuICAgIDwvZGl2PlxuICApXG59O1xuXG4iXSwibmFtZXMiOlsidXNlVXNlciIsIlJlYWN0IiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();