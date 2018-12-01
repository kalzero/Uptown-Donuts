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
eval("\n\n__webpack_require__(/*! ../css/main.scss */ \"./src/css/main.scss\");\n\nvar _uptownBuildings = __webpack_require__(/*! ../img/uptown-buildings.png */ \"./src/img/uptown-buildings.png\");\n\nvar _uptownBuildings2 = _interopRequireDefault(_uptownBuildings);\n\nvar _uptownDonut = __webpack_require__(/*! ../img/uptown-donut.png */ \"./src/img/uptown-donut.png\");\n\nvar _uptownDonut2 = _interopRequireDefault(_uptownDonut);\n\nvar _uptownDonutArrowSmall = __webpack_require__(/*! ../img/uptown-donut-arrow-small.png */ \"./src/img/uptown-donut-arrow-small.png\");\n\nvar _uptownDonutArrowSmall2 = _interopRequireDefault(_uptownDonutArrowSmall);\n\nvar _htmlLoader = __webpack_require__(/*! ./helper/htmlLoader */ \"./src/js/helper/htmlLoader.js\");\n\nvar loader = _interopRequireWildcard(_htmlLoader);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// when page load for the first time go to intro\nwindow.onload = function () {\n    loader.getPage(\"intro\");\n};\n\nwindow.onhashchange = function () {\n    //window.history.go(-1);\n};\n\n// get html page based off the nav buttons\nvar menuItems = [\"nav-menu\"];\nmenuItems.forEach(function (cur) {\n    document.getElementById(cur).addEventListener(\"click\", function (e) {\n        loader.getPage(\"menu\");\n    });\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/helper/htmlLoader.js":
/*!*************************************!*\
  !*** ./src/js/helper/htmlLoader.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar getPage = exports.getPage = function getPage(pageName) {\n\n    var xhr = new XMLHttpRequest();\n    xhr.open('GET', \"dist/pages/_\" + pageName + \".html\", true);\n    xhr.send();\n\n    xhr.onreadystatechange = function () {\n        if (this.readyState !== 4) return;\n        if (this.status !== 200) return;\n        var response = this.responseText;\n        document.getElementById(\"app\").innerHTML = response;\n    };\n};\n\n//# sourceURL=webpack:///./src/js/helper/htmlLoader.js?");

/***/ })

/******/ });