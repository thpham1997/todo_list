/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_header.js":
/*!************************!*\
  !*** ./src/_header.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_logo_solid_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo-solid.svg */ "./src/img/logo-solid.svg");
/* harmony import */ var _img_user_solid_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/user-solid.svg */ "./src/img/user-solid.svg");
/* harmony import */ var _simplefuntion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_simplefuntion */ "./src/_simplefuntion.js");



const logoDiv = (function () {

  const makeLogoDiv = (logoClassName, logoLink) => {
    let myLogo = _simplefuntion__WEBPACK_IMPORTED_MODULE_2__.default.makeLogo(logoClassName, logoLink);
    return myLogo;
  }


  const makeTextDiv = (textClassName, textFormat, textDescription) => {
    let myText = _simplefuntion__WEBPACK_IMPORTED_MODULE_2__.default.makeText(textClassName, textFormat, textDescription);
    return myText;
  }
  return { makeLogoDiv, makeTextDiv };
})();

const userDiv = (function () {
  const makeUserDiv = (logoClassName, logoLink) => {
    let myUserLogo = _simplefuntion__WEBPACK_IMPORTED_MODULE_2__.default.makeLogo(logoClassName, logoLink);
    return myUserLogo;
  }

  return { makeUserDiv };
})();


function header() {
  let myHeader = _simplefuntion__WEBPACK_IMPORTED_MODULE_2__.default.makeTag('header', 'header');
  let myLogoAndNameDiv = _simplefuntion__WEBPACK_IMPORTED_MODULE_2__.default.makeDiv('logo-name');
  let myLogoDiv = logoDiv.makeLogoDiv('logo-name__logo', _img_logo_solid_svg__WEBPACK_IMPORTED_MODULE_0__);
  let myNameDiv = logoDiv.makeTextDiv('logo-name__name', 'p', 'company name');
  let myUserDiv = _simplefuntion__WEBPACK_IMPORTED_MODULE_2__.default.makeDiv('user');
  let myUser = userDiv.makeUserDiv('user__icon', _img_user_solid_svg__WEBPACK_IMPORTED_MODULE_1__);

  myLogoAndNameDiv.appendChild(myLogoDiv);
  myLogoAndNameDiv.appendChild(myNameDiv);
  myUserDiv.appendChild(myUser);
  myHeader.appendChild(myLogoAndNameDiv);
  myHeader.appendChild(myUserDiv);


  return myHeader;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./src/_simplefuntion.js":
/*!*******************************!*\
  !*** ./src/_simplefuntion.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const simpleHtmlTag = (function () {

  const makeTag = (tagType, className) => {
    let myTag = document.createElement(tagType);
    myTag.classList.add(className);
    return myTag;
  }
  const makeDiv = (className) => {
    let div = makeTag('div', className);
    return div;
  }

  const makeLogo = (className, logoLink) => {
    let logo = makeTag('img', className);
    logo.src = logoLink;
    return logo;
  }


  const makeText = (className, textFormat, textDescription) => {
    let text = makeTag(textFormat, className);
    text.innerHTML = textDescription;
    return text;
  }



  return { makeTag, makeDiv, makeLogo, makeText };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (simpleHtmlTag);

/***/ }),

/***/ "./src/img/logo-solid.svg":
/*!********************************!*\
  !*** ./src/img/logo-solid.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d197318ed98b2d7e9aee.svg";

/***/ }),

/***/ "./src/img/user-solid.svg":
/*!********************************!*\
  !*** ./src/img/user-solid.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93b18c331bddc24d684d.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_header */ "./src/_header.js");


function main(){
  const CONTENT = document.querySelector('.content');
  const myHeader = (0,_header__WEBPACK_IMPORTED_MODULE_0__.default)();

  CONTENT.appendChild(myHeader);
  
}

main();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uZWRfdG9kb19saXN0Ly4vc3JjL19oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3RvZG9fbGlzdC8uL3NyYy9fc2ltcGxlZnVudGlvbi5qcyIsIndlYnBhY2s6Ly9jbG9uZWRfdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nsb25lZF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nsb25lZF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jbG9uZWRfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2xvbmVkX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nsb25lZF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2xvbmVkX3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNBO0FBQ0U7QUFDN0M7O0FBRUE7QUFDQSxpQkFBaUIsNERBQXNCO0FBQ3ZDO0FBQ0E7OztBQUdBO0FBQ0EsaUJBQWlCLDREQUFzQjtBQUN2QztBQUNBO0FBQ0EsVUFBVTtBQUNWLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHFCQUFxQiw0REFBc0I7QUFDM0M7QUFDQTs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7O0FBR0Q7QUFDQSxpQkFBaUIsMkRBQXFCO0FBQ3RDLHlCQUF5QiwyREFBcUI7QUFDOUMseURBQXlELGdEQUFPO0FBQ2hFO0FBQ0Esa0JBQWtCLDJEQUFxQjtBQUN2QyxpREFBaUQsZ0RBQU87O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFOzs7Ozs7Ozs7Ozs7OztBQzlDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFRCxpRUFBZSxhQUFhLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUI1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7O0FDZitCOztBQUUvQjtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFNOztBQUV6Qjs7QUFFQTs7QUFFQSxPIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nb1NWRyBmcm9tICcuL2ltZy9sb2dvLXNvbGlkLnN2Zyc7XG5pbXBvcnQgdXNlclNWRyBmcm9tICcuL2ltZy91c2VyLXNvbGlkLnN2Zyc7XG5pbXBvcnQgc2ltcGxlSHRtbFRhZyBmcm9tICcuL19zaW1wbGVmdW50aW9uJztcbmNvbnN0IGxvZ29EaXYgPSAoZnVuY3Rpb24gKCkge1xuXG4gIGNvbnN0IG1ha2VMb2dvRGl2ID0gKGxvZ29DbGFzc05hbWUsIGxvZ29MaW5rKSA9PiB7XG4gICAgbGV0IG15TG9nbyA9IHNpbXBsZUh0bWxUYWcubWFrZUxvZ28obG9nb0NsYXNzTmFtZSwgbG9nb0xpbmspO1xuICAgIHJldHVybiBteUxvZ287XG4gIH1cblxuXG4gIGNvbnN0IG1ha2VUZXh0RGl2ID0gKHRleHRDbGFzc05hbWUsIHRleHRGb3JtYXQsIHRleHREZXNjcmlwdGlvbikgPT4ge1xuICAgIGxldCBteVRleHQgPSBzaW1wbGVIdG1sVGFnLm1ha2VUZXh0KHRleHRDbGFzc05hbWUsIHRleHRGb3JtYXQsIHRleHREZXNjcmlwdGlvbik7XG4gICAgcmV0dXJuIG15VGV4dDtcbiAgfVxuICByZXR1cm4geyBtYWtlTG9nb0RpdiwgbWFrZVRleHREaXYgfTtcbn0pKCk7XG5cbmNvbnN0IHVzZXJEaXYgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBtYWtlVXNlckRpdiA9IChsb2dvQ2xhc3NOYW1lLCBsb2dvTGluaykgPT4ge1xuICAgIGxldCBteVVzZXJMb2dvID0gc2ltcGxlSHRtbFRhZy5tYWtlTG9nbyhsb2dvQ2xhc3NOYW1lLCBsb2dvTGluayk7XG4gICAgcmV0dXJuIG15VXNlckxvZ287XG4gIH1cblxuICByZXR1cm4geyBtYWtlVXNlckRpdiB9O1xufSkoKTtcblxuXG5mdW5jdGlvbiBoZWFkZXIoKSB7XG4gIGxldCBteUhlYWRlciA9IHNpbXBsZUh0bWxUYWcubWFrZVRhZygnaGVhZGVyJywgJ2hlYWRlcicpO1xuICBsZXQgbXlMb2dvQW5kTmFtZURpdiA9IHNpbXBsZUh0bWxUYWcubWFrZURpdignbG9nby1uYW1lJyk7XG4gIGxldCBteUxvZ29EaXYgPSBsb2dvRGl2Lm1ha2VMb2dvRGl2KCdsb2dvLW5hbWVfX2xvZ28nLCBsb2dvU1ZHKTtcbiAgbGV0IG15TmFtZURpdiA9IGxvZ29EaXYubWFrZVRleHREaXYoJ2xvZ28tbmFtZV9fbmFtZScsICdwJywgJ2NvbXBhbnkgbmFtZScpO1xuICBsZXQgbXlVc2VyRGl2ID0gc2ltcGxlSHRtbFRhZy5tYWtlRGl2KCd1c2VyJyk7XG4gIGxldCBteVVzZXIgPSB1c2VyRGl2Lm1ha2VVc2VyRGl2KCd1c2VyX19pY29uJywgdXNlclNWRyk7XG5cbiAgbXlMb2dvQW5kTmFtZURpdi5hcHBlbmRDaGlsZChteUxvZ29EaXYpO1xuICBteUxvZ29BbmROYW1lRGl2LmFwcGVuZENoaWxkKG15TmFtZURpdik7XG4gIG15VXNlckRpdi5hcHBlbmRDaGlsZChteVVzZXIpO1xuICBteUhlYWRlci5hcHBlbmRDaGlsZChteUxvZ29BbmROYW1lRGl2KTtcbiAgbXlIZWFkZXIuYXBwZW5kQ2hpbGQobXlVc2VyRGl2KTtcblxuXG4gIHJldHVybiBteUhlYWRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyOyIsImNvbnN0IHNpbXBsZUh0bWxUYWcgPSAoZnVuY3Rpb24gKCkge1xuXG4gIGNvbnN0IG1ha2VUYWcgPSAodGFnVHlwZSwgY2xhc3NOYW1lKSA9PiB7XG4gICAgbGV0IG15VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdUeXBlKTtcbiAgICBteVRhZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIG15VGFnO1xuICB9XG4gIGNvbnN0IG1ha2VEaXYgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgbGV0IGRpdiA9IG1ha2VUYWcoJ2RpdicsIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIGNvbnN0IG1ha2VMb2dvID0gKGNsYXNzTmFtZSwgbG9nb0xpbmspID0+IHtcbiAgICBsZXQgbG9nbyA9IG1ha2VUYWcoJ2ltZycsIGNsYXNzTmFtZSk7XG4gICAgbG9nby5zcmMgPSBsb2dvTGluaztcbiAgICByZXR1cm4gbG9nbztcbiAgfVxuXG5cbiAgY29uc3QgbWFrZVRleHQgPSAoY2xhc3NOYW1lLCB0ZXh0Rm9ybWF0LCB0ZXh0RGVzY3JpcHRpb24pID0+IHtcbiAgICBsZXQgdGV4dCA9IG1ha2VUYWcodGV4dEZvcm1hdCwgY2xhc3NOYW1lKTtcbiAgICB0ZXh0LmlubmVySFRNTCA9IHRleHREZXNjcmlwdGlvbjtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG5cblxuICByZXR1cm4geyBtYWtlVGFnLCBtYWtlRGl2LCBtYWtlTG9nbywgbWFrZVRleHQgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNpbXBsZUh0bWxUYWc7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGhlYWRlciBmcm9tIFwiLi9faGVhZGVyXCI7XG5cbmZ1bmN0aW9uIG1haW4oKXtcbiAgY29uc3QgQ09OVEVOVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnN0IG15SGVhZGVyID0gaGVhZGVyKCk7XG5cbiAgQ09OVEVOVC5hcHBlbmRDaGlsZChteUhlYWRlcik7XG4gIFxufVxuXG5tYWluKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==