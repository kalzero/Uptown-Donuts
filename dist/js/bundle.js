/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/main.scss?");

/***/ }),

/***/ "./src/img sync recursive ^\\.\\/.*\\.png$":
/*!************************************!*\
  !*** ./src/img sync ^\.\/.*\.png$ ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./cinnamon-rolls.png\": \"./src/img/cinnamon-rolls.png\",\n\t\"./donut-1-small.png\": \"./src/img/donut-1-small.png\",\n\t\"./donut-2-small.png\": \"./src/img/donut-2-small.png\",\n\t\"./donut-3-small.png\": \"./src/img/donut-3-small.png\",\n\t\"./pistachio.png\": \"./src/img/pistachio.png\",\n\t\"./plain-old-fashion.png\": \"./src/img/plain-old-fashion.png\",\n\t\"./pumpkin-spice.png\": \"./src/img/pumpkin-spice.png\",\n\t\"./uptown-about-1.png\": \"./src/img/uptown-about-1.png\",\n\t\"./uptown-about-2.png\": \"./src/img/uptown-about-2.png\",\n\t\"./uptown-about-3.png\": \"./src/img/uptown-about-3.png\",\n\t\"./uptown-about-4.png\": \"./src/img/uptown-about-4.png\",\n\t\"./uptown-buildings.png\": \"./src/img/uptown-buildings.png\",\n\t\"./uptown-donut-arrow-small.png\": \"./src/img/uptown-donut-arrow-small.png\",\n\t\"./uptown-donut.png\": \"./src/img/uptown-donut.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img sync recursive ^\\\\.\\\\/.*\\\\.png$\";\n\n//# sourceURL=webpack:///./src/img_sync_^\\.\\/.*\\.png$?");

/***/ }),

/***/ "./src/img/cinnamon-rolls.png":
/*!************************************!*\
  !*** ./src/img/cinnamon-rolls.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/cinnamon-rolls.png\";\n\n//# sourceURL=webpack:///./src/img/cinnamon-rolls.png?");

/***/ }),

/***/ "./src/img/donut-1-small.png":
/*!***********************************!*\
  !*** ./src/img/donut-1-small.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/donut-1-small.png\";\n\n//# sourceURL=webpack:///./src/img/donut-1-small.png?");

/***/ }),

/***/ "./src/img/donut-2-small.png":
/*!***********************************!*\
  !*** ./src/img/donut-2-small.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/donut-2-small.png\";\n\n//# sourceURL=webpack:///./src/img/donut-2-small.png?");

/***/ }),

/***/ "./src/img/donut-3-small.png":
/*!***********************************!*\
  !*** ./src/img/donut-3-small.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/donut-3-small.png\";\n\n//# sourceURL=webpack:///./src/img/donut-3-small.png?");

/***/ }),

/***/ "./src/img/pistachio.png":
/*!*******************************!*\
  !*** ./src/img/pistachio.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/pistachio.png\";\n\n//# sourceURL=webpack:///./src/img/pistachio.png?");

/***/ }),

/***/ "./src/img/plain-old-fashion.png":
/*!***************************************!*\
  !*** ./src/img/plain-old-fashion.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/plain-old-fashion.png\";\n\n//# sourceURL=webpack:///./src/img/plain-old-fashion.png?");

/***/ }),

/***/ "./src/img/pumpkin-spice.png":
/*!***********************************!*\
  !*** ./src/img/pumpkin-spice.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/pumpkin-spice.png\";\n\n//# sourceURL=webpack:///./src/img/pumpkin-spice.png?");

/***/ }),

/***/ "./src/img/uptown-about-1.png":
/*!************************************!*\
  !*** ./src/img/uptown-about-1.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/uptown-about-1.png\";\n\n//# sourceURL=webpack:///./src/img/uptown-about-1.png?");

/***/ }),

/***/ "./src/img/uptown-about-2.png":
/*!************************************!*\
  !*** ./src/img/uptown-about-2.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/uptown-about-2.png\";\n\n//# sourceURL=webpack:///./src/img/uptown-about-2.png?");

/***/ }),

/***/ "./src/img/uptown-about-3.png":
/*!************************************!*\
  !*** ./src/img/uptown-about-3.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/uptown-about-3.png\";\n\n//# sourceURL=webpack:///./src/img/uptown-about-3.png?");

/***/ }),

/***/ "./src/img/uptown-about-4.png":
/*!************************************!*\
  !*** ./src/img/uptown-about-4.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/uptown-about-4.png\";\n\n//# sourceURL=webpack:///./src/img/uptown-about-4.png?");

/***/ }),

/***/ "./src/img/uptown-buildings.png":
/*!**************************************!*\
  !*** ./src/img/uptown-buildings.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/uptown-buildings.png\";\n\n//# sourceURL=webpack:///./src/img/uptown-buildings.png?");

/***/ }),

/***/ "./src/img/uptown-donut-arrow-small.png":
/*!**********************************************!*\
  !*** ./src/img/uptown-donut-arrow-small.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/uptown-donut-arrow-small.png\";\n\n//# sourceURL=webpack:///./src/img/uptown-donut-arrow-small.png?");

/***/ }),

/***/ "./src/img/uptown-donut.png":
/*!**********************************!*\
  !*** ./src/img/uptown-donut.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/uptown-donut.png\";\n\n//# sourceURL=webpack:///./src/img/uptown-donut.png?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../css/main.scss */ \"./src/css/main.scss\");\n\nvar _route = __webpack_require__(/*! ./route/route */ \"./src/js/route/route.js\");\n\nvar _route2 = _interopRequireDefault(_route);\n\nvar _router = __webpack_require__(/*! ./route/router */ \"./src/js/route/router.js\");\n\nvar _router2 = _interopRequireDefault(_router);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// load every image needed\nvar requireContext = __webpack_require__(\"./src/img sync recursive ^\\\\.\\\\/.*\\\\.png$\");\nrequireContext.keys().map(requireContext);\n\n// Load all routes\nvar routes = [new _route2.default(\"home\", \"_home.html\", true), new _route2.default(\"menu\", \"_menu.html\")];\n\n// Register Routes to load\nvar router = new _router2.default(routes);\nrouter.init();\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/route/route.js":
/*!*******************************!*\
  !*** ./src/js/route/route.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Route = function () {\n    function Route(name, htmlName, isDefault) {\n        _classCallCheck(this, Route);\n\n        this.name = name;\n        this.htmlName = htmlName;\n        this.isDefault = isDefault;\n    }\n\n    _createClass(Route, [{\n        key: \"getCurrentRoute\",\n        value: function getCurrentRoute(hashedPath) {\n            return hashedPath.replace(\"#\", '') === this.name;\n        }\n    }]);\n\n    return Route;\n}();\n\nexports.default = Route;\n\n//# sourceURL=webpack:///./src/js/route/route.js?");

/***/ }),

/***/ "./src/js/route/router.js":
/*!********************************!*\
  !*** ./src/js/route/router.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Router = function () {\n    function Router(routes) {\n        _classCallCheck(this, Router);\n\n        this.routes = routes;\n        this.root = document.getElementById(\"app\");\n    }\n\n    _createClass(Router, [{\n        key: \"init\",\n        value: function init() {\n            var _this = this;\n\n            var r = this.routes;\n            window.addEventListener(\"hashchange\", function () {\n                _this.routeChanged(_this, r);\n            });\n            this.routeChanged(this, r);\n        }\n    }, {\n        key: \"routeChanged\",\n        value: function routeChanged(scope, routes) {\n            var _this2 = this;\n\n            // checks to see if any of the menu buttons were clicked and then change route\n            if (window.location.hash.length > 0) {\n                routes.forEach(function (route) {\n                    if (route.getCurrentRoute(window.location.hash.substr(1))) {\n                        scope.goToRoute(_this2, route.name);\n                    }\n                });\n            } else {\n                routes.forEach(function (route) {\n                    if (route.isDefault) {\n                        scope.goToRoute(_this2, route.name);\n                    }\n                });\n            }\n        }\n    }, {\n        key: \"goToRoute\",\n        value: function goToRoute(scope, name) {\n\n            var xhr = new XMLHttpRequest();\n            xhr.open('GET', \"dist/views/_\" + name + \".html\", true);\n            xhr.send();\n\n            xhr.onreadystatechange = function () {\n                if (this.readyState !== 4) return;\n                if (this.status !== 200) return;\n                scope.root.innerHTML = this.responseText;\n            };\n        }\n    }]);\n\n    return Router;\n}();\n\nexports.default = Router;\n\n//# sourceURL=webpack:///./src/js/route/router.js?");

/***/ })

/******/ });