/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/css/main.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/css/main.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml, body {\n  height: 100%;\n}\n\n.content {\n  display: grid;\n  grid-template-areas: \"header header\" \"navbar todoList\" \"footer footer\";\n  grid-template-columns: 15rem 1fr;\n  grid-template-rows: 7rem 1fr 3rem;\n  width: 100%;\n  height: 100%;\n  background-color: #111d13;\n}\n\n.header {\n  grid-area: header;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  background-color: #709775;\n}\n.header .logo-name {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.header .logo-name__logo {\n  width: 4rem;\n  margin: auto 2rem;\n}\n.header .logo-name__name {\n  font-size: 3rem;\n  font-weight: bold;\n  margin-left: 2rem;\n}\n.header .user__icon {\n  position: absolute;\n  right: 2rem;\n  top: 2rem;\n  width: 2rem;\n  height: 2rem;\n  margin: auto 2rem;\n  background-color: blanchedalmond;\n  border-radius: 50%;\n}\n\n.navbar {\n  grid-area: navbar;\n  display: grid;\n  grid-template-rows: 50% 50%;\n  background-color: #709775;\n  margin: 0.5rem 0.5rem;\n  border-radius: 0.5rem;\n  overflow: auto;\n}\n.navbar .status {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n.navbar .status > button {\n  font-weight: bold;\n  width: 90%;\n  height: 2.4rem;\n  border-radius: 0.5rem;\n  border-width: 0;\n  background-color: inherit;\n}\n.navbar .status > button:hover {\n  background-color: #a1cca5;\n  color: #111d13;\n  cursor: pointer;\n}\n.navbar .status .btn--active {\n  background-color: #415d43;\n  color: #a6f3b3;\n}\n.navbar .project {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  overflow: auto;\n}\n.navbar .project > button {\n  flex-shrink: 0;\n  font-weight: bold;\n  width: 90%;\n  height: 2.4rem;\n  border-radius: 0.5rem;\n  border-width: 0;\n  background-color: inherit;\n  margin: 0.2rem auto;\n}\n.navbar .project > button:hover {\n  background-color: #a1cca5;\n  color: #111d13;\n  cursor: pointer;\n}\n.navbar .project__add {\n  height: 2rem;\n  font-size: 1.2rem;\n  margin: 1rem auto;\n}\n.navbar .project .btn--active {\n  background-color: #415d43;\n  color: #a6f3b3;\n}\n\n.todoContainer {\n  margin: 0.5rem 0.5rem;\n  background-color: #a1cca5;\n  border-radius: 0.5rem;\n  overflow: auto;\n}\n.todoContainer__add {\n  display: none;\n}\n\n.footer {\n  grid-area: footer;\n  background-color: #a1cca5;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  border-radius: 0.4rem;\n}\n.footer__name {\n  margin-left: 4rem;\n  line-height: 3rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.footer__github {\n  margin-right: 4rem;\n}\n.footer__link {\n  line-height: 3rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.project__form {\n  width: 90%;\n  height: 6.5rem;\n  display: none;\n  background-color: #8fb996;\n  text-align: center;\n  border-radius: 0.3rem;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n}\n.project__name {\n  display: block;\n  width: 90%;\n  height: 2rem;\n  margin: 0.5rem auto;\n}\n.project__confirm, .project__cancel {\n  display: inline-block;\n  width: 5rem;\n  margin: 0.5rem 0.3rem;\n}\n\n.todoContainer__form {\n  display: none;\n  width: 18rem;\n  height: 16rem;\n  border-radius: 1rem;\n  background-color: #90b896;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n  margin: 0.5rem auto;\n}\n.todoContainer__form > * {\n  display: block;\n  width: 16rem;\n  margin: 0.8rem auto;\n}\n.todoContainer__form > button {\n  width: 8rem;\n  height: 1.5rem;\n  background-color: inherit;\n  border: none;\n  border-radius: 0.2rem;\n}\n.todoContainer__form > button:hover {\n  background-color: #709775;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n}\n.todoContainer__add {\n  width: 8rem;\n  height: 1.5rem;\n  margin: 0.8rem auto;\n  background-color: inherit;\n  border: none;\n  border-radius: 0.2rem;\n  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.todoContainer__add:hover {\n  background-color: #709775;\n  color: white;\n  font-size: 1.1rem;\n  cursor: pointer;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n}\n.todoContainer label > * {\n  display: block;\n  margin-top: 0.2rem;\n}\n\n.show {\n  display: block;\n}\n\n.card {\n  background-color: #5d8361;\n  width: 85%;\n  border-radius: 0.3rem;\n  margin: 0.5rem auto;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n  transition: 0.5s;\n  transition-timing-function: ease-in-out;\n}\n.card:hover {\n  background-color: #709f75;\n  color: #173b1a;\n  width: 90%;\n  font-size: 1.1rem;\n  cursor: pointer;\n}\n.card__name {\n  align-self: center;\n  margin: 0.4rem auto;\n}\n.card__description {\n  align-self: center;\n  margin: 0.4rem auto;\n}\n.card__duedate {\n  align-self: flex-end;\n  margin: 0.4rem 0.5rem;\n}\n", "",{"version":3,"sources":["webpack://./dist/css/main.css"],"names":[],"mappings":"AAAA;;;CAGC;AACD;;;;;;;;;;;;;EAaE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;;AAEA,gDAAgD;AAChD;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sEAAsE;EACtE,gCAAgC;EAChC,iCAAiC;EACjC,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,2BAA2B;EAC3B,yBAAyB;EACzB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,UAAU;EACV,cAAc;EACd,qBAAqB;EACrB,eAAe;EACf,yBAAyB;AAC3B;AACA;EACE,yBAAyB;EACzB,cAAc;EACd,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,cAAc;EACd,iBAAiB;EACjB,UAAU;EACV,cAAc;EACd,qBAAqB;EACrB,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;AACA;EACE,yBAAyB;EACzB,cAAc;EACd,eAAe;AACjB;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;EACpB,qBAAqB;AACvB;AACA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,qBAAqB;EACrB,0CAA0C;AAC5C;AACA;EACE,cAAc;EACd,UAAU;EACV,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,0CAA0C;EAC1C,mBAAmB;AACrB;AACA;EACE,cAAc;EACd,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,cAAc;EACd,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,0CAA0C;AAC5C;AACA;EACE,WAAW;EACX,cAAc;EACd,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;EACrB,oDAAoD;AACtD;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,0CAA0C;AAC5C;AACA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,UAAU;EACV,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,0CAA0C;EAC1C,gBAAgB;EAChB,uCAAuC;AACzC;AACA;EACE,yBAAyB;EACzB,cAAc;EACd,UAAU;EACV,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,oBAAoB;EACpB,qBAAqB;AACvB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml, body {\n  height: 100%;\n}\n\n.content {\n  display: grid;\n  grid-template-areas: \"header header\" \"navbar todoList\" \"footer footer\";\n  grid-template-columns: 15rem 1fr;\n  grid-template-rows: 7rem 1fr 3rem;\n  width: 100%;\n  height: 100%;\n  background-color: #111d13;\n}\n\n.header {\n  grid-area: header;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  background-color: #709775;\n}\n.header .logo-name {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.header .logo-name__logo {\n  width: 4rem;\n  margin: auto 2rem;\n}\n.header .logo-name__name {\n  font-size: 3rem;\n  font-weight: bold;\n  margin-left: 2rem;\n}\n.header .user__icon {\n  position: absolute;\n  right: 2rem;\n  top: 2rem;\n  width: 2rem;\n  height: 2rem;\n  margin: auto 2rem;\n  background-color: blanchedalmond;\n  border-radius: 50%;\n}\n\n.navbar {\n  grid-area: navbar;\n  display: grid;\n  grid-template-rows: 50% 50%;\n  background-color: #709775;\n  margin: 0.5rem 0.5rem;\n  border-radius: 0.5rem;\n  overflow: auto;\n}\n.navbar .status {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n.navbar .status > button {\n  font-weight: bold;\n  width: 90%;\n  height: 2.4rem;\n  border-radius: 0.5rem;\n  border-width: 0;\n  background-color: inherit;\n}\n.navbar .status > button:hover {\n  background-color: #a1cca5;\n  color: #111d13;\n  cursor: pointer;\n}\n.navbar .status .btn--active {\n  background-color: #415d43;\n  color: #a6f3b3;\n}\n.navbar .project {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  overflow: auto;\n}\n.navbar .project > button {\n  flex-shrink: 0;\n  font-weight: bold;\n  width: 90%;\n  height: 2.4rem;\n  border-radius: 0.5rem;\n  border-width: 0;\n  background-color: inherit;\n  margin: 0.2rem auto;\n}\n.navbar .project > button:hover {\n  background-color: #a1cca5;\n  color: #111d13;\n  cursor: pointer;\n}\n.navbar .project__add {\n  height: 2rem;\n  font-size: 1.2rem;\n  margin: 1rem auto;\n}\n.navbar .project .btn--active {\n  background-color: #415d43;\n  color: #a6f3b3;\n}\n\n.todoContainer {\n  margin: 0.5rem 0.5rem;\n  background-color: #a1cca5;\n  border-radius: 0.5rem;\n  overflow: auto;\n}\n.todoContainer__add {\n  display: none;\n}\n\n.footer {\n  grid-area: footer;\n  background-color: #a1cca5;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  border-radius: 0.4rem;\n}\n.footer__name {\n  margin-left: 4rem;\n  line-height: 3rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.footer__github {\n  margin-right: 4rem;\n}\n.footer__link {\n  line-height: 3rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.project__form {\n  width: 90%;\n  height: 6.5rem;\n  display: none;\n  background-color: #8fb996;\n  text-align: center;\n  border-radius: 0.3rem;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n}\n.project__name {\n  display: block;\n  width: 90%;\n  height: 2rem;\n  margin: 0.5rem auto;\n}\n.project__confirm, .project__cancel {\n  display: inline-block;\n  width: 5rem;\n  margin: 0.5rem 0.3rem;\n}\n\n.todoContainer__form {\n  display: none;\n  width: 18rem;\n  height: 16rem;\n  border-radius: 1rem;\n  background-color: #90b896;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n  margin: 0.5rem auto;\n}\n.todoContainer__form > * {\n  display: block;\n  width: 16rem;\n  margin: 0.8rem auto;\n}\n.todoContainer__form > button {\n  width: 8rem;\n  height: 1.5rem;\n  background-color: inherit;\n  border: none;\n  border-radius: 0.2rem;\n}\n.todoContainer__form > button:hover {\n  background-color: #709775;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n}\n.todoContainer__add {\n  width: 8rem;\n  height: 1.5rem;\n  margin: 0.8rem auto;\n  background-color: inherit;\n  border: none;\n  border-radius: 0.2rem;\n  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.todoContainer__add:hover {\n  background-color: #709775;\n  color: white;\n  font-size: 1.1rem;\n  cursor: pointer;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n}\n.todoContainer label > * {\n  display: block;\n  margin-top: 0.2rem;\n}\n\n.show {\n  display: block;\n}\n\n.card {\n  background-color: #5d8361;\n  width: 85%;\n  border-radius: 0.3rem;\n  margin: 0.5rem auto;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n  transition: 0.5s;\n  transition-timing-function: ease-in-out;\n}\n.card:hover {\n  background-color: #709f75;\n  color: #173b1a;\n  width: 90%;\n  font-size: 1.1rem;\n  cursor: pointer;\n}\n.card__name {\n  align-self: center;\n  margin: 0.4rem auto;\n}\n.card__description {\n  align-self: center;\n  margin: 0.4rem auto;\n}\n.card__duedate {\n  align-self: flex-end;\n  margin: 0.4rem 0.5rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./dist/css/main.css":
/*!***************************!*\
  !*** ./dist/css/main.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./dist/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/_footer.js":
/*!************************!*\
  !*** ./src/_footer.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _simplefuntion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_simplefuntion */ "./src/_simplefuntion.js");


function footer(){
  let myFooter = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeDiv('footer');
  let nameDiv = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('p', 'footer__name');
  let gitHubDiv = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeDiv('footer__github');
  let gitHubLink = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('A', 'footer__link');
  nameDiv.textContent ='Made by Thanh Pham';
  gitHubLink.href = 'https://github.com/thpham1997/todo_list';
  gitHubLink.textContent = 'My GitHub';
  gitHubLink.target = "_blank"
  gitHubDiv.appendChild(gitHubLink);
  myFooter.appendChild(nameDiv);
  myFooter.appendChild(gitHubDiv);

  return myFooter;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);

/***/ }),

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
  let myNameDiv = logoDiv.makeTextDiv('logo-name__name', 'p', 'TooDoo');
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

/***/ "./src/_interface.js":
/*!***************************!*\
  !*** ./src/_interface.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _simplefuntion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_simplefuntion */ "./src/_simplefuntion.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_navbar */ "./src/_navbar.js");
/* harmony import */ var _todoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_todoContainer */ "./src/_todoContainer.js");
/* harmony import */ var _todoCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_todoCard */ "./src/_todoCard.js");





const projects = (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.projectController)();

// console.log(storage);


function getData() {
  // get data (create default data here to demo)
  projects.clearAll();
  let data = [];
  let myStorage = window.localStorage;
  for (let i = 0; i < myStorage.length; i++) {
    let listName = myStorage.key(i);
    console.log(i, listName);
    let listValues = myStorage.getItem(listName);
    data.push({
      name: listName,
      value: listValues
    });

  }
  console.table(data);
  data.forEach((list) => {
    let listName = list.name;
    let items = list.value.split('&');
    let newList = new _navbar__WEBPACK_IMPORTED_MODULE_1__.todoList(listName);
    items.forEach((item, index) => {
      items[index] = JSON.parse(item);
      let newItem = new _todoContainer__WEBPACK_IMPORTED_MODULE_2__.todoItem(items[index].name, items[index].desc, new Date(Date.parse(items[index].dueDate)));
      if (newItem.getName() !== 'default') newList.add(newItem);
    })

    projects.add(newList);
  })
  console.log(projects.getProjects());
  // end of data mangement
}

function storeData() {
  let myStorage = window.localStorage;
  let lists = projects.getProjects();
  let defaultItem = new _todoContainer__WEBPACK_IMPORTED_MODULE_2__.todoItem('default', 'default', new Date());
  console.log(lists);
  lists.forEach((list, index) => {
    let items = list.getItems();
    let itemsString = '';
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      itemsString += ('&' + JSON.stringify(Object.assign({}, { name: item.getName(), desc: item.getDescription(), dueDate: item.getDueDate() })));
    };
    (itemsString !== '') ? itemsString = itemsString.slice(1) : itemsString = JSON.stringify(Object.assign({}, { name: defaultItem.getName(), desc: defaultItem.getDescription(), defaultItem: defaultItem.getDueDate() }));
    myStorage.setItem(list.getName(), itemsString);
    console.log(itemsString);
  })
}

function btnDisplay(btn) {
  let activeBtn = document.querySelectorAll('.btn--active');
  for (let i = 0; i < activeBtn.length; i++) {
    activeBtn[i].classList.remove('btn--active');
  }

  btn.classList.add('btn--active');
}

function allProjectsBtn() {
  const ALL_BTN = document.querySelector('.status__all');
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  const NEWTODO_BTN = document.querySelector('.todoContainer__add');
  ALL_BTN.addEventListener('click', (e) => {
    clearTodoContainer();
    NEWTODO_BTN.classList.remove('show');
    btnDisplay(e.target);
    // if (TODO_CONTAINER.hasChildNodes()) TODO_CONTAINER.removeChild(TODO_CONTAINER.firstChild);
    let lists = projects.getProjects();
    lists.forEach((list) => {
      let items = list.getItems();
      items.forEach((item) => {
        TODO_CONTAINER.appendChild((0,_todoCard__WEBPACK_IMPORTED_MODULE_3__.default)(item.getName(), item.getDescription(), item.getDueDate()));
      })
    })
  })
}

function todayProjectsBtn() {
  const TODAY_BTN = document.querySelector('.status__today');
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  const NEWTODO_BTN = document.querySelector('.todoContainer__add');
  TODAY_BTN.addEventListener('click', (e) => {
    clearTodoContainer();
    NEWTODO_BTN.classList.remove('show');
    btnDisplay(e.target);
    let lists = projects.getProjects();
    lists.forEach((list) => {
      let items = list.getItems();
      items.forEach((item) => {
        let dueDate = item.getDueDate();
        let today = new Date();
        if (dueDate.getDate() === today.getDate() && dueDate.getMonth() === today.getMonth() && dueDate.getYear() === today.getYear()) {
          TODO_CONTAINER.appendChild((0,_todoCard__WEBPACK_IMPORTED_MODULE_3__.default)(item.getName(), item.getDescription(), item.getDueDate()));
        }
      })
    })
  })
}

function finishedProjectsBtn() {
  const FINISHED_BTN = document.querySelector('.status__finished');
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  const NEWTODO_BTN = document.querySelector('.todoContainer__add');
  FINISHED_BTN.addEventListener('click', (e) => {
    clearTodoContainer();
    NEWTODO_BTN.classList.remove('show');
    btnDisplay(e.target);
    let lists = projects.getProjects();
    lists.forEach((list) => {
      let items = list.getItems();
      items.forEach((item) => {
        if (item.getIsDone()) {
          TODO_CONTAINER.appendChild((0,_todoCard__WEBPACK_IMPORTED_MODULE_3__.default)(item.getName(), item.getDescription(), item.getDueDate()));
        }
      })
    })
  })
}

function unfinishedProjectsBtn() {
  const UNFINISHED_BTN = document.querySelector('.status__notFinised');
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  const NEWTODO_BTN = document.querySelector('.todoContainer__add');
  UNFINISHED_BTN.addEventListener('click', (e) => {
    clearTodoContainer();
    NEWTODO_BTN.classList.remove('show');
    btnDisplay(e.target);
    let lists = projects.getProjects();
    lists.forEach((list) => {
      let items = list.getItems();
      items.forEach((item) => {
        if (!item.getIsDone()) {
          TODO_CONTAINER.appendChild((0,_todoCard__WEBPACK_IMPORTED_MODULE_3__.default)(item.getName(), item.getDescription(), item.getDueDate()));
        }
      })
    })
  })
}


function addProjectBtn() {
  const ADD_PROJECT_BUTTON = document.querySelector('.project__add');
  const ADD_PROJECT_FORM = document.querySelector('.project__form');
  ADD_PROJECT_BUTTON.addEventListener('click', (e) => {
    btnDisplay(e.target);
    ADD_PROJECT_FORM.classList.toggle('show');
    ADD_PROJECT_FORM.classList.contains('show') ? ADD_PROJECT_BUTTON.textContent = '-' : ADD_PROJECT_BUTTON.textContent = '+';
    ADD_PROJECT_FORM.firstChild.value = '';
  })
}

function projectConfirmBtnForm() {
  const CONFIRM_BTN = document.querySelector('.project__confirm');
  CONFIRM_BTN.addEventListener('click', (e) => {
    e.preventDefault();
    let name = e.target.parentNode.firstChild.value || 'default name';
    let list = new _navbar__WEBPACK_IMPORTED_MODULE_1__.todoList(name);
    let index = projects.add(list);
    console.log(list);
    let newProject = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('button', 'project__list');
    newProject.setAttribute('data-projectName', name);
    newProject.setAttribute('data-index', index);
    newProject.innerHTML = name;
    e.target.parentNode.parentNode.appendChild(newProject);
    storeData();
    getData();
    showTodoLists();
    newProject.addEventListener('click', (e) => {
      projectBtnEvent(e.target);
      btnDisplay(e.target);
    })
    e.target.parentNode.classList.toggle('show');
  })
}
function projectCancelBtnForm() {
  const cancelBtn = document.querySelector('.project__cancel');
  cancelBtn.addEventListener('click', (e) => {
    e.target.parentNode.firstChild.value = '';
    e.target.parentNode.classList.toggle('show');
  })
}

function showTodoLists() {
  const PROJECT = document.querySelector('.project');
  let lists = projects.getProjects();
  while (PROJECT.childElementCount > 2) {
    PROJECT.removeChild(PROJECT.lastChild);
  }
  lists.forEach((list, index) => {
    let newList = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('button', 'project__list');
    newList.setAttribute('data-projectName', list.getName());
    newList.setAttribute('data-index', index);
    newList.innerHTML = list.getName();
    PROJECT.appendChild(newList)
    newList.addEventListener('click', (e) => {
      btnDisplay(e.target);
      projectBtnEvent(e.target);
    })
  })
}


function clearTodoContainer() {
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  while (TODO_CONTAINER.childElementCount > 2) {
    TODO_CONTAINER.removeChild(TODO_CONTAINER.lastChild);
  };
  console.log('1');
}

function projectBtnEvent(buttonNode) {
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  const NEWTODO_BTN = document.querySelector('.todoContainer__add');
  clearTodoContainer();
  NEWTODO_BTN.classList.add('show');
  let listIndex = +(buttonNode.getAttribute('data-index'));
  let list = projects.getProject(listIndex);
  let items = list.getItems();
  projects.setCurProject(listIndex);
  console.log(projects.getCurProject().getName());
  items.forEach((item, index) => {
    let card = (0,_todoCard__WEBPACK_IMPORTED_MODULE_3__.default)(item.getName(), item.getDescription(), item.getDueDate());
    TODO_CONTAINER.appendChild(card);
    card.addEventListener('click', (e) => {
      console.log(list.getItems());
      e.target.parentNode.removeChild(e.target);
      list.deleteItem(index);
      console.log(list.getItems());
      storeData();
      getData();
    })
  })
}



function newTodoBtn() {
  const NEW_TOODOO = document.querySelector('.todoContainer__add');
  NEW_TOODOO.addEventListener('click', (e) => {
    const TODO_FORM = document.querySelector('.todoContainer__form');
    TODO_FORM.classList.toggle('show');
  })
}

function todoConfirmBtnForm() {
  const CONFIRM_BTN = document.querySelector('.todoContainer__confirm');
  CONFIRM_BTN.addEventListener('click', (e) => {
    e.preventDefault();
    const TODO_NAME = document.querySelector('.todoContainer__name');
    const TODO_DESCRIPTION = document.querySelector('.todoContainer__description');
    const TODO_DUEDATE = document.querySelector('.todoContainer__duedate');
    const TODO_FORM = document.querySelector('.todoContainer__form');
    const TODO_CONTAINER = document.querySelector('.todoContainer');
    let name = TODO_NAME.value || 'default name';
    let description = TODO_DESCRIPTION.value || 'default description';
    let dueDate = TODO_DUEDATE.valueAsDate || new Date();
    let item = new _todoContainer__WEBPACK_IMPORTED_MODULE_2__.todoItem(name, description, dueDate);
    projects.getCurProject().add(item);
    TODO_CONTAINER.appendChild((0,_todoCard__WEBPACK_IMPORTED_MODULE_3__.default)(item.getName(), item.getDescription(), item.getDueDate()));
    TODO_FORM.classList.remove('show');
    TODO_NAME.value = '';
    TODO_NAME.value || 'default name';
    TODO_DESCRIPTION.value = '';
    TODO_DUEDATE.value = '';
    storeData();
    getData();
  })
}

function todoCancelBtnForm() {
  const CANCEL_BTN = document.querySelector('.todoContainer__cancel');
  CANCEL_BTN.addEventListener('click', (e) => {
    e.preventDefault();
    const TODO_NAME = document.querySelector('.todoContainer__name');
    const TODO_DESCRIPTION = document.querySelector('.todoContainer__description');
    const TODO_DUEDATE = document.querySelector('.todoContainer__duedate');
    const TODO_FORM = document.querySelector('.todoContainer__form');
    TODO_FORM.classList.remove('show');
    TODO_NAME.value = '';
    TODO_NAME.value || 'default name';
    TODO_DESCRIPTION.value = '';
    TODO_DUEDATE.value = '';
  })
}


function generalInterface() {
  getData();
  // storeData();
  allProjectsBtn();
  todayProjectsBtn();
  finishedProjectsBtn();
  unfinishedProjectsBtn();
  showTodoLists();
  addProjectBtn();
  projectConfirmBtnForm();
  projectCancelBtnForm();
  todoConfirmBtnForm();
  todoCancelBtnForm();
  newTodoBtn();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generalInterface);

/***/ }),

/***/ "./src/_navbar.js":
/*!************************!*\
  !*** ./src/_navbar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbar": () => (/* binding */ navbar),
/* harmony export */   "todoList": () => (/* binding */ todoList),
/* harmony export */   "projectController": () => (/* binding */ projectController)
/* harmony export */ });
/* harmony import */ var _simplefuntion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_simplefuntion */ "./src/_simplefuntion.js");


function todoList(projectName) {

  let name = projectName;
  let project = [];

  function getName() {
    return name;
  }

  function getItems() {
    return project;
  }

  function add(todoItem) {
    project.push(todoItem);
  }

  function getItem(index) {
    return project[index];
  }

  function deleteItem(index) {
    let deleted = project.splice(index, 1)[0];
    return deleted;
  }

  function getLength() {
    return project.length;
  }

  return { getItems, add, getItem, deleteItem, getLength, getName };
}
function projectController() {
  const PROJECT = document.querySelector('.project');
  let projects = [];
  let curProject = undefined;

  function add(todoList) {
    projects.push(todoList);
    // let newProject = simpleHtmlTag.makeTag('button', 'project__list');
    // newProject.setAttribute('data-projectName', todoList.getProjectName())
    // newProject.setAttribute('data-index', PROJECT.childElementCount - 2);
    // newProject.innerHTML = todoList.getProjectName();
    // PROJECT.appendChild(newProject);
    return projects.length - 1;
  }
  function getProjects() {
    return projects;
  }

  function getProject(index) {
    return projects[index];
  }
  function getProjectNum() {
    return projects.length;
  }

  function setCurProject(index) {
    curProject = getProject(index);
  }

  function getCurProject() {
    return curProject;
  }
  /**
  * return index or -1
  */
  function findProjectIndex(projectName) {
    return projects.findIdex((project) => project.getProjectName === projectName);
  }

  function removeProject(project) {
    return projects.splice(findProjectIndex(removeProject.innerHTML), 1);
  }

  function clearAll() {
    projects = [];
  }

  function changeProjectName(newName, project) {
    projects[findProjectIndex(project.innerHTML)].setProjectName(newName);
    project.setAttribute('data-projectName', newName);
  }

  return { add, findProjectIndex, removeProject, changeProjectName, getProjects, getProject, getProjectNum, setCurProject, getCurProject, clearAll };
}
function navbar() {
  let navBar = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeDiv('navbar');
  let statusDiv = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeDiv('status');
  let allBtn = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('button', 'status__all');
  allBtn.innerHTML = 'ALL';
  let todayBtn = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('button', 'status__today');
  todayBtn.innerHTML = 'TODAY';
  let finisedBtn = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('button', 'status__finished');
  finisedBtn.innerHTML = 'FINISHED';
  let notFinisedBtn = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('button', 'status__notFinised');
  notFinisedBtn.innerHTML = 'NOT FINISHED';

  statusDiv.appendChild(allBtn);
  statusDiv.appendChild(todayBtn);
  statusDiv.appendChild(finisedBtn);
  statusDiv.appendChild(notFinisedBtn);

  let projectDiv = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeDiv('project');
  let addingForm = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('form', 'project__form');
  let projectName = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('input', 'project__name');
  projectName.type = 'text';
  projectName.required = true;
  projectName.placeholder = 'List Name';
  let confirmBtn = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('button', 'project__confirm');
  confirmBtn.innerHTML = 'Confirm';
  confirmBtn.type = 'submit';
  let cancelBtn = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('button', 'project__cancel');
  cancelBtn.innerHTML = 'Cancel';
  let addProjectBtn = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('button', 'project__add');
  addProjectBtn.innerHTML = '+';

  projectDiv.appendChild(addingForm);
  addingForm.appendChild(projectName);
  addingForm.appendChild(confirmBtn);
  addingForm.appendChild(cancelBtn);
  projectDiv.appendChild(addProjectBtn);

  navBar.appendChild(statusDiv);
  navBar.appendChild(projectDiv)

  return navBar;
}




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
    if(className!=='') myTag.classList.add(className);
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

/***/ "./src/_todoCard.js":
/*!**************************!*\
  !*** ./src/_todoCard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _simplefuntion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_simplefuntion */ "./src/_simplefuntion.js");


function todoCard(name, description, dueDate){
  let cardDiv = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeDiv('card');
  let namePar = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('p', 'card__name');
  let desPar = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('p', 'card__description');
  let dueDatePar = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('p', 'card__duedate');

  namePar.textContent = 'Name: ' + name;
  desPar.textContent = 'Note: ' + description;
  dueDatePar.textContent = 'Due date: ' + dueDate.toDateString();

  cardDiv.appendChild(namePar);
  cardDiv.appendChild(desPar);
  cardDiv.appendChild(dueDatePar);

  return cardDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoCard);

/***/ }),

/***/ "./src/_todoContainer.js":
/*!*******************************!*\
  !*** ./src/_todoContainer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoItem": () => (/* binding */ todoItem),
/* harmony export */   "todoContainer": () => (/* binding */ todoContainer)
/* harmony export */ });
/* harmony import */ var _simplefuntion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_simplefuntion */ "./src/_simplefuntion.js");
/* harmony import */ var date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/compareAsc */ "./node_modules/date-fns/esm/compareAsc/index.js");



function todoItem(name, description, dueDate/*, projectName*/) {
  let myName = name;
  let myDescription = description;
  // this.projectName = projectName;
  let myDueDate = dueDate;
  let myIsDone = false;
  let myIsOverDue = ((0,date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_1__.default)(dueDate, new Date()) >= 0) ? false : true;

  function setName(name) {
    myName = name;
  }

  function getName() {
    return myName;
  }

  function setDescription(description) {
    myDescription = description;
  }

  function getDescription() {
    return myDescription;
  }

  // function belongToProject(projectName) {
  //   return this.projectName === projectName;
  // }

  function setDueDate(dueDate) {
    myDueDate = dueDate;
  }
  function getDueDate() {
    return myDueDate;
  }
  function setIsDone(isDone) {
    myIsDone = isDone;
  }

  function getIsDone() {
    return myIsDone;
  }

  function setIsOverDue(isOverDue) {
    myIsOverDue = isOverDue;
  }

  function getIsOverDue() {
    return myIsOverDue;
  }

  return { setName, getName, setDescription, getDescription, setDueDate, getDueDate, setIsDone, getIsDone, setIsOverDue, getIsOverDue };
}


function todoContainer() {
  let listContainer = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeDiv('todoContainer');
  let itemAddingBtn = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('button', 'todoContainer__add');
  itemAddingBtn.innerHTML = 'New TooDoo';
  listContainer.appendChild(itemAddingBtn);


  let itemAddingForm = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('form', 'todoContainer__form');
  let nameLabel = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('label', '')
  let descriptionLabel = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('label', '')
  let dueDateLabel = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('label', '')
  let itemName = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('input', 'todoContainer__name');
  let itemDescription = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('input', 'todoContainer__description');
  let itemDueDate = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('input', 'todoContainer__duedate');
  let confirmBtn = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('button', 'todoContainer__confirm');
  confirmBtn.innerHTML = 'Confirm';
  confirmBtn.type = 'submit';
  let cancelBtn = _simplefuntion__WEBPACK_IMPORTED_MODULE_0__.default.makeTag('button', 'todoContainer__cancel');
  cancelBtn.innerHTML = 'Cancel';
  itemName.type = 'text';
  itemName.required = true;
  itemName.placeholder = 'TOODOO Name';
  itemName.id = 'name';
  itemDescription.type = 'text';
  itemDescription.required = true;
  itemDescription.placeholder = 'TOODOO Description';
  itemDescription.id = 'description';
  itemDueDate.type = 'date';
  itemDueDate.id = 'dueDate';
  itemDueDate.min = (function () {
    let now = new Date();
    let year = now.getFullYear();
    let month = (now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1);
    let day = now.getDate() + 1 < 10 ? '0' + now.getDate() : now.getDate();
    return year + '-' + month + '-' + day;
  })();
  nameLabel.innerHTML = 'Name';
  nameLabel.htmlFor = 'name';
  descriptionLabel.innerHTML = 'Description';
  descriptionLabel.htmlFor = 'description';
  dueDateLabel.innerHTML = 'Due date';
  dueDateLabel.htmlFor = 'dueDate';

  nameLabel.appendChild(itemName);
  descriptionLabel.appendChild(itemDescription);
  dueDateLabel.appendChild(itemDueDate);

  itemAddingForm.appendChild(nameLabel);
  itemAddingForm.appendChild(descriptionLabel);
  itemAddingForm.appendChild(dueDateLabel);
  itemAddingForm.appendChild(confirmBtn);
  itemAddingForm.appendChild(cancelBtn);

  listContainer.appendChild(itemAddingForm);
  return listContainer;
}



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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_navbar */ "./src/_navbar.js");
/* harmony import */ var _todoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_todoContainer */ "./src/_todoContainer.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_footer */ "./src/_footer.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_interface */ "./src/_interface.js");
/* harmony import */ var _dist_css_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dist/css/main.css */ "./dist/css/main.css");






function main() {
  const CONTENT = document.querySelector('.content');
  const myHeader = (0,_header__WEBPACK_IMPORTED_MODULE_0__.default)();
  const myNavBar = (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.navbar)();
  const myTodoContainer = (0,_todoContainer__WEBPACK_IMPORTED_MODULE_2__.todoContainer)();
  const myFooter = (0,_footer__WEBPACK_IMPORTED_MODULE_3__.default)();

  CONTENT.appendChild(myHeader);
  CONTENT.appendChild(myNavBar);
  CONTENT.appendChild(myTodoContainer);
  CONTENT.appendChild(myFooter);

  const myInterface = (0,_interface__WEBPACK_IMPORTED_MODULE_4__.default)();
  // testing area
  // let todo1 = new todoItem('test1', 'test1Des', new Date(2022, 1, 1));
  // let todo2 = new todoItem('test1', 'test1Des', new Date(2022, 2, 1));
  // let list1 = new todoList('Project 1 test');
  // list1.add(todo1);
  // list1.add(todo2);
  // controlers
  // let myProjectController = new projectController();
  // console.log(myProjectController.getProjects());
  // end of testing area
}

main();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uZWRfdG9kb19saXN0Ly4vZGlzdC9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vY2xvbmVkX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2Nsb25lZF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL2Nsb25lZF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL2Nsb25lZF90b2RvX2xpc3QvLi9kaXN0L2Nzcy9tYWluLmNzcz9hN2I1Iiwid2VicGFjazovL2Nsb25lZF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jbG9uZWRfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Nsb25lZF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jbG9uZWRfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3RvZG9fbGlzdC8uL3NyYy9fZm9vdGVyLmpzIiwid2VicGFjazovL2Nsb25lZF90b2RvX2xpc3QvLi9zcmMvX2hlYWRlci5qcyIsIndlYnBhY2s6Ly9jbG9uZWRfdG9kb19saXN0Ly4vc3JjL19pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3RvZG9fbGlzdC8uL3NyYy9fbmF2YmFyLmpzIiwid2VicGFjazovL2Nsb25lZF90b2RvX2xpc3QvLi9zcmMvX3NpbXBsZWZ1bnRpb24uanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3RvZG9fbGlzdC8uL3NyYy9fdG9kb0NhcmQuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3RvZG9fbGlzdC8uL3NyYy9fdG9kb0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9jbG9uZWRfdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nsb25lZF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2xvbmVkX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Nsb25lZF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jbG9uZWRfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2xvbmVkX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jbG9uZWRfdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSwyb0JBQTJvQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixHQUFHLGlKQUFpSixtQkFBbUIsR0FBRyxVQUFVLG1CQUFtQixHQUFHLFlBQVkscUJBQXFCLEdBQUcsbUJBQW1CLGlCQUFpQixHQUFHLDZEQUE2RCxrQkFBa0Isa0JBQWtCLEdBQUcsV0FBVyw4QkFBOEIsc0JBQXNCLEdBQUcsZ0JBQWdCLGlCQUFpQixHQUFHLGNBQWMsa0JBQWtCLGlGQUFpRixxQ0FBcUMsc0NBQXNDLGdCQUFnQixpQkFBaUIsOEJBQThCLEdBQUcsYUFBYSxzQkFBc0Isa0JBQWtCLG1DQUFtQyw4QkFBOEIsR0FBRyxzQkFBc0Isa0JBQWtCLHdCQUF3QixnQ0FBZ0Msd0JBQXdCLEdBQUcsNEJBQTRCLGdCQUFnQixzQkFBc0IsR0FBRyw0QkFBNEIsb0JBQW9CLHNCQUFzQixzQkFBc0IsR0FBRyx1QkFBdUIsdUJBQXVCLGdCQUFnQixjQUFjLGdCQUFnQixpQkFBaUIsc0JBQXNCLHFDQUFxQyx1QkFBdUIsR0FBRyxhQUFhLHNCQUFzQixrQkFBa0IsZ0NBQWdDLDhCQUE4QiwwQkFBMEIsMEJBQTBCLG1CQUFtQixHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLGtDQUFrQyx3QkFBd0IsR0FBRyw0QkFBNEIsc0JBQXNCLGVBQWUsbUJBQW1CLDBCQUEwQixvQkFBb0IsOEJBQThCLEdBQUcsa0NBQWtDLDhCQUE4QixtQkFBbUIsb0JBQW9CLEdBQUcsZ0NBQWdDLDhCQUE4QixtQkFBbUIsR0FBRyxvQkFBb0Isa0JBQWtCLDJCQUEyQixnQ0FBZ0Ms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QSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZitCO0FBQ0c7QUFDeUI7QUFDNUI7QUFDYTtBQUNmO0FBQzdCO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQU07QUFDekIsbUJBQW1CLCtDQUFNO0FBQ3pCLDBCQUEwQiw2REFBYTtBQUN2QyxtQkFBbUIsZ0RBQU07O0FBRXpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixtREFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXJcXFwiIFxcXCJuYXZiYXIgdG9kb0xpc3RcXFwiIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTVyZW0gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3cmVtIDFmciAzcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExZDEzO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDk3NzU7XFxufVxcbi5oZWFkZXIgLmxvZ28tbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLmxvZ28tbmFtZV9fbG9nbyB7XFxuICB3aWR0aDogNHJlbTtcXG4gIG1hcmdpbjogYXV0byAycmVtO1xcbn1cXG4uaGVhZGVyIC5sb2dvLW5hbWVfX25hbWUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuLmhlYWRlciAudXNlcl9faWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMnJlbTtcXG4gIHRvcDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgbWFyZ2luOiBhdXRvIDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBncmlkLWFyZWE6IG5hdmJhcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA5Nzc1O1xcbiAgbWFyZ2luOiAwLjVyZW0gMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5uYXZiYXIgLnN0YXR1cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdmJhciAuc3RhdHVzID4gYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMi40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuLm5hdmJhciAuc3RhdHVzID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMWNjYTU7XFxuICBjb2xvcjogIzExMWQxMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdmJhciAuc3RhdHVzIC5idG4tLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE1ZDQzO1xcbiAgY29sb3I6ICNhNmYzYjM7XFxufVxcbi5uYXZiYXIgLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5uYXZiYXIgLnByb2plY3QgPiBidXR0b24ge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBtYXJnaW46IDAuMnJlbSBhdXRvO1xcbn1cXG4ubmF2YmFyIC5wcm9qZWN0ID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMWNjYTU7XFxuICBjb2xvcjogIzExMWQxMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdmJhciAucHJvamVjdF9fYWRkIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxufVxcbi5uYXZiYXIgLnByb2plY3QgLmJ0bi0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTVkNDM7XFxuICBjb2xvcjogI2E2ZjNiMztcXG59XFxuXFxuLnRvZG9Db250YWluZXIge1xcbiAgbWFyZ2luOiAwLjVyZW0gMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExY2NhNTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4udG9kb0NvbnRhaW5lcl9fYWRkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFjY2E1O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxufVxcbi5mb290ZXJfX25hbWUge1xcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XFxuICBsaW5lLWhlaWdodDogM3JlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5mb290ZXJfX2dpdGh1YiB7XFxuICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxufVxcbi5mb290ZXJfX2xpbmsge1xcbiAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvamVjdF9fZm9ybSB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA2LjVyZW07XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhmYjk5NjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuLnByb2plY3RfX25hbWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgbWFyZ2luOiAwLjVyZW0gYXV0bztcXG59XFxuLnByb2plY3RfX2NvbmZpcm0sIC5wcm9qZWN0X19jYW5jZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDVyZW07XFxuICBtYXJnaW46IDAuNXJlbSAwLjNyZW07XFxufVxcblxcbi50b2RvQ29udGFpbmVyX19mb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMThyZW07XFxuICBoZWlnaHQ6IDE2cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MGI4OTY7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBtYXJnaW46IDAuNXJlbSBhdXRvO1xcbn1cXG4udG9kb0NvbnRhaW5lcl9fZm9ybSA+ICoge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTZyZW07XFxuICBtYXJnaW46IDAuOHJlbSBhdXRvO1xcbn1cXG4udG9kb0NvbnRhaW5lcl9fZm9ybSA+IGJ1dHRvbiB7XFxuICB3aWR0aDogOHJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG59XFxuLnRvZG9Db250YWluZXJfX2Zvcm0gPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwOTc3NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG4udG9kb0NvbnRhaW5lcl9fYWRkIHtcXG4gIHdpZHRoOiA4cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBtYXJnaW46IDAuOHJlbSBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIHRyYW5zaXRpb246IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XFxufVxcbi50b2RvQ29udGFpbmVyX19hZGQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwOTc3NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG4udG9kb0NvbnRhaW5lciBsYWJlbCA+ICoge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAwLjJyZW07XFxufVxcblxcbi5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ4MzYxO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIG1hcmdpbjogMC41cmVtIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcbi5jYXJkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDlmNzU7XFxuICBjb2xvcjogIzE3M2IxYTtcXG4gIHdpZHRoOiA5MCU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNhcmRfX25hbWUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luOiAwLjRyZW0gYXV0bztcXG59XFxuLmNhcmRfX2Rlc2NyaXB0aW9uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbjogMC40cmVtIGF1dG87XFxufVxcbi5jYXJkX19kdWVkYXRlIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgbWFyZ2luOiAwLjRyZW0gMC41cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9kaXN0L2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7QUFDRDs7Ozs7Ozs7Ozs7OztFQWFFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBLGdEQUFnRDtBQUNoRDs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzRUFBc0U7RUFDdEUsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0NBQWdD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aUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxcIm5hdmJhciB0b2RvTGlzdFxcXCIgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXJlbSAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDdyZW0gMWZyIDNyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTFkMTM7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwOTc3NTtcXG59XFxuLmhlYWRlciAubG9nby1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAubG9nby1uYW1lX19sb2dvIHtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgbWFyZ2luOiBhdXRvIDJyZW07XFxufVxcbi5oZWFkZXIgLmxvZ28tbmFtZV9fbmFtZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG4uaGVhZGVyIC51c2VyX19pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAycmVtO1xcbiAgdG9wOiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBtYXJnaW46IGF1dG8gMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGdyaWQtYXJlYTogbmF2YmFyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDk3NzU7XFxuICBtYXJnaW46IDAuNXJlbSAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuLm5hdmJhciAuc3RhdHVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2YmFyIC5zdGF0dXMgPiBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAyLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4ubmF2YmFyIC5zdGF0dXMgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExY2NhNTtcXG4gIGNvbG9yOiAjMTExZDEzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2YmFyIC5zdGF0dXMgLmJ0bi0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTVkNDM7XFxuICBjb2xvcjogI2E2ZjNiMztcXG59XFxuLm5hdmJhciAucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuLm5hdmJhciAucHJvamVjdCA+IGJ1dHRvbiB7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMi40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIG1hcmdpbjogMC4ycmVtIGF1dG87XFxufVxcbi5uYXZiYXIgLnByb2plY3QgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExY2NhNTtcXG4gIGNvbG9yOiAjMTExZDEzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2YmFyIC5wcm9qZWN0X19hZGQge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG59XFxuLm5hdmJhciAucHJvamVjdCAuYnRuLS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNWQ0MztcXG4gIGNvbG9yOiAjYTZmM2IzO1xcbn1cXG5cXG4udG9kb0NvbnRhaW5lciB7XFxuICBtYXJnaW46IDAuNXJlbSAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFjY2E1O1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi50b2RvQ29udGFpbmVyX19hZGQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMWNjYTU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG59XFxuLmZvb3Rlcl9fbmFtZSB7XFxuICBtYXJnaW4tbGVmdDogNHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmZvb3Rlcl9fZ2l0aHViIHtcXG4gIG1hcmdpbi1yaWdodDogNHJlbTtcXG59XFxuLmZvb3Rlcl9fbGluayB7XFxuICBsaW5lLWhlaWdodDogM3JlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0X19mb3JtIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDYuNXJlbTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGZiOTk2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG4ucHJvamVjdF9fbmFtZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBtYXJnaW46IDAuNXJlbSBhdXRvO1xcbn1cXG4ucHJvamVjdF9fY29uZmlybSwgLnByb2plY3RfX2NhbmNlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNXJlbTtcXG4gIG1hcmdpbjogMC41cmVtIDAuM3JlbTtcXG59XFxuXFxuLnRvZG9Db250YWluZXJfX2Zvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiAxOHJlbTtcXG4gIGhlaWdodDogMTZyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwYjg5NjtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIG1hcmdpbjogMC41cmVtIGF1dG87XFxufVxcbi50b2RvQ29udGFpbmVyX19mb3JtID4gKiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxNnJlbTtcXG4gIG1hcmdpbjogMC44cmVtIGF1dG87XFxufVxcbi50b2RvQ29udGFpbmVyX19mb3JtID4gYnV0dG9uIHtcXG4gIHdpZHRoOiA4cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG4udG9kb0NvbnRhaW5lcl9fZm9ybSA+IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA5Nzc1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbi50b2RvQ29udGFpbmVyX19hZGQge1xcbiAgd2lkdGg6IDhyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIG1hcmdpbjogMC44cmVtIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgdHJhbnNpdGlvbjogMC40cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcXG59XFxuLnRvZG9Db250YWluZXJfX2FkZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA5Nzc1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbi50b2RvQ29udGFpbmVyIGxhYmVsID4gKiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcXG59XFxuXFxuLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDgzNjE7XFxuICB3aWR0aDogODUlO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW0gYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuLmNhcmQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwOWY3NTtcXG4gIGNvbG9yOiAjMTczYjFhO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FyZF9fbmFtZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDAuNHJlbSBhdXRvO1xcbn1cXG4uY2FyZF9fZGVzY3JpcHRpb24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luOiAwLjRyZW0gYXV0bztcXG59XFxuLmNhcmRfX2R1ZWRhdGUge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW46IDAuNHJlbSAwLjVyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzaW1wbGVIdG1sVGFnIGZyb20gXCIuL19zaW1wbGVmdW50aW9uXCI7XG5cbmZ1bmN0aW9uIGZvb3Rlcigpe1xuICBsZXQgbXlGb290ZXIgPSBzaW1wbGVIdG1sVGFnLm1ha2VEaXYoJ2Zvb3RlcicpO1xuICBsZXQgbmFtZURpdiA9IHNpbXBsZUh0bWxUYWcubWFrZVRhZygncCcsICdmb290ZXJfX25hbWUnKTtcbiAgbGV0IGdpdEh1YkRpdiA9IHNpbXBsZUh0bWxUYWcubWFrZURpdignZm9vdGVyX19naXRodWInKTtcbiAgbGV0IGdpdEh1YkxpbmsgPSBzaW1wbGVIdG1sVGFnLm1ha2VUYWcoJ0EnLCAnZm9vdGVyX19saW5rJyk7XG4gIG5hbWVEaXYudGV4dENvbnRlbnQgPSdNYWRlIGJ5IFRoYW5oIFBoYW0nO1xuICBnaXRIdWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL3RocGhhbTE5OTcvdG9kb19saXN0JztcbiAgZ2l0SHViTGluay50ZXh0Q29udGVudCA9ICdNeSBHaXRIdWInO1xuICBnaXRIdWJMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCJcbiAgZ2l0SHViRGl2LmFwcGVuZENoaWxkKGdpdEh1YkxpbmspO1xuICBteUZvb3Rlci5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbiAgbXlGb290ZXIuYXBwZW5kQ2hpbGQoZ2l0SHViRGl2KTtcblxuICByZXR1cm4gbXlGb290ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlciIsImltcG9ydCBsb2dvU1ZHIGZyb20gJy4vaW1nL2xvZ28tc29saWQuc3ZnJztcbmltcG9ydCB1c2VyU1ZHIGZyb20gJy4vaW1nL3VzZXItc29saWQuc3ZnJztcbmltcG9ydCBzaW1wbGVIdG1sVGFnIGZyb20gJy4vX3NpbXBsZWZ1bnRpb24nO1xuY29uc3QgbG9nb0RpdiA9IChmdW5jdGlvbiAoKSB7XG5cbiAgY29uc3QgbWFrZUxvZ29EaXYgPSAobG9nb0NsYXNzTmFtZSwgbG9nb0xpbmspID0+IHtcbiAgICBsZXQgbXlMb2dvID0gc2ltcGxlSHRtbFRhZy5tYWtlTG9nbyhsb2dvQ2xhc3NOYW1lLCBsb2dvTGluayk7XG4gICAgcmV0dXJuIG15TG9nbztcbiAgfVxuXG5cbiAgY29uc3QgbWFrZVRleHREaXYgPSAodGV4dENsYXNzTmFtZSwgdGV4dEZvcm1hdCwgdGV4dERlc2NyaXB0aW9uKSA9PiB7XG4gICAgbGV0IG15VGV4dCA9IHNpbXBsZUh0bWxUYWcubWFrZVRleHQodGV4dENsYXNzTmFtZSwgdGV4dEZvcm1hdCwgdGV4dERlc2NyaXB0aW9uKTtcbiAgICByZXR1cm4gbXlUZXh0O1xuICB9XG4gIHJldHVybiB7IG1ha2VMb2dvRGl2LCBtYWtlVGV4dERpdiB9O1xufSkoKTtcblxuY29uc3QgdXNlckRpdiA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1ha2VVc2VyRGl2ID0gKGxvZ29DbGFzc05hbWUsIGxvZ29MaW5rKSA9PiB7XG4gICAgbGV0IG15VXNlckxvZ28gPSBzaW1wbGVIdG1sVGFnLm1ha2VMb2dvKGxvZ29DbGFzc05hbWUsIGxvZ29MaW5rKTtcbiAgICByZXR1cm4gbXlVc2VyTG9nbztcbiAgfVxuXG4gIHJldHVybiB7IG1ha2VVc2VyRGl2IH07XG59KSgpO1xuXG5cbmZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgbGV0IG15SGVhZGVyID0gc2ltcGxlSHRtbFRhZy5tYWtlVGFnKCdoZWFkZXInLCAnaGVhZGVyJyk7XG4gIGxldCBteUxvZ29BbmROYW1lRGl2ID0gc2ltcGxlSHRtbFRhZy5tYWtlRGl2KCdsb2dvLW5hbWUnKTtcbiAgbGV0IG15TG9nb0RpdiA9IGxvZ29EaXYubWFrZUxvZ29EaXYoJ2xvZ28tbmFtZV9fbG9nbycsIGxvZ29TVkcpO1xuICBsZXQgbXlOYW1lRGl2ID0gbG9nb0Rpdi5tYWtlVGV4dERpdignbG9nby1uYW1lX19uYW1lJywgJ3AnLCAnVG9vRG9vJyk7XG4gIGxldCBteVVzZXJEaXYgPSBzaW1wbGVIdG1sVGFnLm1ha2VEaXYoJ3VzZXInKTtcbiAgbGV0IG15VXNlciA9IHVzZXJEaXYubWFrZVVzZXJEaXYoJ3VzZXJfX2ljb24nLCB1c2VyU1ZHKTtcblxuICBteUxvZ29BbmROYW1lRGl2LmFwcGVuZENoaWxkKG15TG9nb0Rpdik7XG4gIG15TG9nb0FuZE5hbWVEaXYuYXBwZW5kQ2hpbGQobXlOYW1lRGl2KTtcbiAgbXlVc2VyRGl2LmFwcGVuZENoaWxkKG15VXNlcik7XG4gIG15SGVhZGVyLmFwcGVuZENoaWxkKG15TG9nb0FuZE5hbWVEaXYpO1xuICBteUhlYWRlci5hcHBlbmRDaGlsZChteVVzZXJEaXYpO1xuXG5cbiAgcmV0dXJuIG15SGVhZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7IiwiaW1wb3J0IHNpbXBsZUh0bWxUYWcgZnJvbSBcIi4vX3NpbXBsZWZ1bnRpb25cIjtcbmltcG9ydCB7IHRvZG9MaXN0LCBwcm9qZWN0Q29udHJvbGxlciB9IGZyb20gXCIuL19uYXZiYXJcIjtcbmltcG9ydCB7IHRvZG9JdGVtIH0gZnJvbSBcIi4vX3RvZG9Db250YWluZXJcIjtcbmltcG9ydCB0b2RvQ2FyZCBmcm9tIFwiLi9fdG9kb0NhcmRcIjtcblxuY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0Q29udHJvbGxlcigpO1xuXG4vLyBjb25zb2xlLmxvZyhzdG9yYWdlKTtcblxuXG5mdW5jdGlvbiBnZXREYXRhKCkge1xuICAvLyBnZXQgZGF0YSAoY3JlYXRlIGRlZmF1bHQgZGF0YSBoZXJlIHRvIGRlbW8pXG4gIHByb2plY3RzLmNsZWFyQWxsKCk7XG4gIGxldCBkYXRhID0gW107XG4gIGxldCBteVN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG15U3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBsaXN0TmFtZSA9IG15U3RvcmFnZS5rZXkoaSk7XG4gICAgY29uc29sZS5sb2coaSwgbGlzdE5hbWUpO1xuICAgIGxldCBsaXN0VmFsdWVzID0gbXlTdG9yYWdlLmdldEl0ZW0obGlzdE5hbWUpO1xuICAgIGRhdGEucHVzaCh7XG4gICAgICBuYW1lOiBsaXN0TmFtZSxcbiAgICAgIHZhbHVlOiBsaXN0VmFsdWVzXG4gICAgfSk7XG5cbiAgfVxuICBjb25zb2xlLnRhYmxlKGRhdGEpO1xuICBkYXRhLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBsZXQgbGlzdE5hbWUgPSBsaXN0Lm5hbWU7XG4gICAgbGV0IGl0ZW1zID0gbGlzdC52YWx1ZS5zcGxpdCgnJicpO1xuICAgIGxldCBuZXdMaXN0ID0gbmV3IHRvZG9MaXN0KGxpc3ROYW1lKTtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaXRlbXNbaW5kZXhdID0gSlNPTi5wYXJzZShpdGVtKTtcbiAgICAgIGxldCBuZXdJdGVtID0gbmV3IHRvZG9JdGVtKGl0ZW1zW2luZGV4XS5uYW1lLCBpdGVtc1tpbmRleF0uZGVzYywgbmV3IERhdGUoRGF0ZS5wYXJzZShpdGVtc1tpbmRleF0uZHVlRGF0ZSkpKTtcbiAgICAgIGlmIChuZXdJdGVtLmdldE5hbWUoKSAhPT0gJ2RlZmF1bHQnKSBuZXdMaXN0LmFkZChuZXdJdGVtKTtcbiAgICB9KVxuXG4gICAgcHJvamVjdHMuYWRkKG5ld0xpc3QpO1xuICB9KVxuICBjb25zb2xlLmxvZyhwcm9qZWN0cy5nZXRQcm9qZWN0cygpKTtcbiAgLy8gZW5kIG9mIGRhdGEgbWFuZ2VtZW50XG59XG5cbmZ1bmN0aW9uIHN0b3JlRGF0YSgpIHtcbiAgbGV0IG15U3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIGxldCBsaXN0cyA9IHByb2plY3RzLmdldFByb2plY3RzKCk7XG4gIGxldCBkZWZhdWx0SXRlbSA9IG5ldyB0b2RvSXRlbSgnZGVmYXVsdCcsICdkZWZhdWx0JywgbmV3IERhdGUoKSk7XG4gIGNvbnNvbGUubG9nKGxpc3RzKTtcbiAgbGlzdHMuZm9yRWFjaCgobGlzdCwgaW5kZXgpID0+IHtcbiAgICBsZXQgaXRlbXMgPSBsaXN0LmdldEl0ZW1zKCk7XG4gICAgbGV0IGl0ZW1zU3RyaW5nID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgIGl0ZW1zU3RyaW5nICs9ICgnJicgKyBKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKHt9LCB7IG5hbWU6IGl0ZW0uZ2V0TmFtZSgpLCBkZXNjOiBpdGVtLmdldERlc2NyaXB0aW9uKCksIGR1ZURhdGU6IGl0ZW0uZ2V0RHVlRGF0ZSgpIH0pKSk7XG4gICAgfTtcbiAgICAoaXRlbXNTdHJpbmcgIT09ICcnKSA/IGl0ZW1zU3RyaW5nID0gaXRlbXNTdHJpbmcuc2xpY2UoMSkgOiBpdGVtc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oe30sIHsgbmFtZTogZGVmYXVsdEl0ZW0uZ2V0TmFtZSgpLCBkZXNjOiBkZWZhdWx0SXRlbS5nZXREZXNjcmlwdGlvbigpLCBkZWZhdWx0SXRlbTogZGVmYXVsdEl0ZW0uZ2V0RHVlRGF0ZSgpIH0pKTtcbiAgICBteVN0b3JhZ2Uuc2V0SXRlbShsaXN0LmdldE5hbWUoKSwgaXRlbXNTdHJpbmcpO1xuICAgIGNvbnNvbGUubG9nKGl0ZW1zU3RyaW5nKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gYnRuRGlzcGxheShidG4pIHtcbiAgbGV0IGFjdGl2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tLWFjdGl2ZScpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGl2ZUJ0bi5sZW5ndGg7IGkrKykge1xuICAgIGFjdGl2ZUJ0bltpXS5jbGFzc0xpc3QucmVtb3ZlKCdidG4tLWFjdGl2ZScpO1xuICB9XG5cbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi0tYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGFsbFByb2plY3RzQnRuKCkge1xuICBjb25zdCBBTExfQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1c19fYWxsJyk7XG4gIGNvbnN0IFRPRE9fQ09OVEFJTkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Db250YWluZXInKTtcbiAgY29uc3QgTkVXVE9ET19CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NvbnRhaW5lcl9fYWRkJyk7XG4gIEFMTF9CVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNsZWFyVG9kb0NvbnRhaW5lcigpO1xuICAgIE5FV1RPRE9fQlROLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICBidG5EaXNwbGF5KGUudGFyZ2V0KTtcbiAgICAvLyBpZiAoVE9ET19DT05UQUlORVIuaGFzQ2hpbGROb2RlcygpKSBUT0RPX0NPTlRBSU5FUi5yZW1vdmVDaGlsZChUT0RPX0NPTlRBSU5FUi5maXJzdENoaWxkKTtcbiAgICBsZXQgbGlzdHMgPSBwcm9qZWN0cy5nZXRQcm9qZWN0cygpO1xuICAgIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgIGxldCBpdGVtcyA9IGxpc3QuZ2V0SXRlbXMoKTtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgVE9ET19DT05UQUlORVIuYXBwZW5kQ2hpbGQodG9kb0NhcmQoaXRlbS5nZXROYW1lKCksIGl0ZW0uZ2V0RGVzY3JpcHRpb24oKSwgaXRlbS5nZXREdWVEYXRlKCkpKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gdG9kYXlQcm9qZWN0c0J0bigpIHtcbiAgY29uc3QgVE9EQVlfQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1c19fdG9kYXknKTtcbiAgY29uc3QgVE9ET19DT05UQUlORVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NvbnRhaW5lcicpO1xuICBjb25zdCBORVdUT0RPX0JUTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ29udGFpbmVyX19hZGQnKTtcbiAgVE9EQVlfQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjbGVhclRvZG9Db250YWluZXIoKTtcbiAgICBORVdUT0RPX0JUTi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgYnRuRGlzcGxheShlLnRhcmdldCk7XG4gICAgbGV0IGxpc3RzID0gcHJvamVjdHMuZ2V0UHJvamVjdHMoKTtcbiAgICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICBsZXQgaXRlbXMgPSBsaXN0LmdldEl0ZW1zKCk7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBkdWVEYXRlID0gaXRlbS5nZXREdWVEYXRlKCk7XG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGlmIChkdWVEYXRlLmdldERhdGUoKSA9PT0gdG9kYXkuZ2V0RGF0ZSgpICYmIGR1ZURhdGUuZ2V0TW9udGgoKSA9PT0gdG9kYXkuZ2V0TW9udGgoKSAmJiBkdWVEYXRlLmdldFllYXIoKSA9PT0gdG9kYXkuZ2V0WWVhcigpKSB7XG4gICAgICAgICAgVE9ET19DT05UQUlORVIuYXBwZW5kQ2hpbGQodG9kb0NhcmQoaXRlbS5nZXROYW1lKCksIGl0ZW0uZ2V0RGVzY3JpcHRpb24oKSwgaXRlbS5nZXREdWVEYXRlKCkpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBmaW5pc2hlZFByb2plY3RzQnRuKCkge1xuICBjb25zdCBGSU5JU0hFRF9CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzX19maW5pc2hlZCcpO1xuICBjb25zdCBUT0RPX0NPTlRBSU5FUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ29udGFpbmVyJyk7XG4gIGNvbnN0IE5FV1RPRE9fQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Db250YWluZXJfX2FkZCcpO1xuICBGSU5JU0hFRF9CVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNsZWFyVG9kb0NvbnRhaW5lcigpO1xuICAgIE5FV1RPRE9fQlROLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICBidG5EaXNwbGF5KGUudGFyZ2V0KTtcbiAgICBsZXQgbGlzdHMgPSBwcm9qZWN0cy5nZXRQcm9qZWN0cygpO1xuICAgIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgIGxldCBpdGVtcyA9IGxpc3QuZ2V0SXRlbXMoKTtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uZ2V0SXNEb25lKCkpIHtcbiAgICAgICAgICBUT0RPX0NPTlRBSU5FUi5hcHBlbmRDaGlsZCh0b2RvQ2FyZChpdGVtLmdldE5hbWUoKSwgaXRlbS5nZXREZXNjcmlwdGlvbigpLCBpdGVtLmdldER1ZURhdGUoKSkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHVuZmluaXNoZWRQcm9qZWN0c0J0bigpIHtcbiAgY29uc3QgVU5GSU5JU0hFRF9CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzX19ub3RGaW5pc2VkJyk7XG4gIGNvbnN0IFRPRE9fQ09OVEFJTkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Db250YWluZXInKTtcbiAgY29uc3QgTkVXVE9ET19CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NvbnRhaW5lcl9fYWRkJyk7XG4gIFVORklOSVNIRURfQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjbGVhclRvZG9Db250YWluZXIoKTtcbiAgICBORVdUT0RPX0JUTi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgYnRuRGlzcGxheShlLnRhcmdldCk7XG4gICAgbGV0IGxpc3RzID0gcHJvamVjdHMuZ2V0UHJvamVjdHMoKTtcbiAgICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICBsZXQgaXRlbXMgPSBsaXN0LmdldEl0ZW1zKCk7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmICghaXRlbS5nZXRJc0RvbmUoKSkge1xuICAgICAgICAgIFRPRE9fQ09OVEFJTkVSLmFwcGVuZENoaWxkKHRvZG9DYXJkKGl0ZW0uZ2V0TmFtZSgpLCBpdGVtLmdldERlc2NyaXB0aW9uKCksIGl0ZW0uZ2V0RHVlRGF0ZSgpKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn1cblxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0QnRuKCkge1xuICBjb25zdCBBRERfUFJPSkVDVF9CVVRUT04gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fYWRkJyk7XG4gIGNvbnN0IEFERF9QUk9KRUNUX0ZPUk0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fZm9ybScpO1xuICBBRERfUFJPSkVDVF9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGJ0bkRpc3BsYXkoZS50YXJnZXQpO1xuICAgIEFERF9QUk9KRUNUX0ZPUk0uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIEFERF9QUk9KRUNUX0ZPUk0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykgPyBBRERfUFJPSkVDVF9CVVRUT04udGV4dENvbnRlbnQgPSAnLScgOiBBRERfUFJPSkVDVF9CVVRUT04udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgQUREX1BST0pFQ1RfRk9STS5maXJzdENoaWxkLnZhbHVlID0gJyc7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHByb2plY3RDb25maXJtQnRuRm9ybSgpIHtcbiAgY29uc3QgQ09ORklSTV9CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fY29uZmlybScpO1xuICBDT05GSVJNX0JUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBuYW1lID0gZS50YXJnZXQucGFyZW50Tm9kZS5maXJzdENoaWxkLnZhbHVlIHx8ICdkZWZhdWx0IG5hbWUnO1xuICAgIGxldCBsaXN0ID0gbmV3IHRvZG9MaXN0KG5hbWUpO1xuICAgIGxldCBpbmRleCA9IHByb2plY3RzLmFkZChsaXN0KTtcbiAgICBjb25zb2xlLmxvZyhsaXN0KTtcbiAgICBsZXQgbmV3UHJvamVjdCA9IHNpbXBsZUh0bWxUYWcubWFrZVRhZygnYnV0dG9uJywgJ3Byb2plY3RfX2xpc3QnKTtcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0TmFtZScsIG5hbWUpO1xuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xuICAgIG5ld1Byb2plY3QuaW5uZXJIVE1MID0gbmFtZTtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gICAgc3RvcmVEYXRhKCk7XG4gICAgZ2V0RGF0YSgpO1xuICAgIHNob3dUb2RvTGlzdHMoKTtcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHByb2plY3RCdG5FdmVudChlLnRhcmdldCk7XG4gICAgICBidG5EaXNwbGF5KGUudGFyZ2V0KTtcbiAgICB9KVxuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICB9KVxufVxuZnVuY3Rpb24gcHJvamVjdENhbmNlbEJ0bkZvcm0oKSB7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19jYW5jZWwnKTtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQudmFsdWUgPSAnJztcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gc2hvd1RvZG9MaXN0cygpIHtcbiAgY29uc3QgUFJPSkVDVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XG4gIGxldCBsaXN0cyA9IHByb2plY3RzLmdldFByb2plY3RzKCk7XG4gIHdoaWxlIChQUk9KRUNULmNoaWxkRWxlbWVudENvdW50ID4gMikge1xuICAgIFBST0pFQ1QucmVtb3ZlQ2hpbGQoUFJPSkVDVC5sYXN0Q2hpbGQpO1xuICB9XG4gIGxpc3RzLmZvckVhY2goKGxpc3QsIGluZGV4KSA9PiB7XG4gICAgbGV0IG5ld0xpc3QgPSBzaW1wbGVIdG1sVGFnLm1ha2VUYWcoJ2J1dHRvbicsICdwcm9qZWN0X19saXN0Jyk7XG4gICAgbmV3TGlzdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdE5hbWUnLCBsaXN0LmdldE5hbWUoKSk7XG4gICAgbmV3TGlzdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XG4gICAgbmV3TGlzdC5pbm5lckhUTUwgPSBsaXN0LmdldE5hbWUoKTtcbiAgICBQUk9KRUNULmFwcGVuZENoaWxkKG5ld0xpc3QpXG4gICAgbmV3TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBidG5EaXNwbGF5KGUudGFyZ2V0KTtcbiAgICAgIHByb2plY3RCdG5FdmVudChlLnRhcmdldCk7XG4gICAgfSlcbiAgfSlcbn1cblxuXG5mdW5jdGlvbiBjbGVhclRvZG9Db250YWluZXIoKSB7XG4gIGNvbnN0IFRPRE9fQ09OVEFJTkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Db250YWluZXInKTtcbiAgd2hpbGUgKFRPRE9fQ09OVEFJTkVSLmNoaWxkRWxlbWVudENvdW50ID4gMikge1xuICAgIFRPRE9fQ09OVEFJTkVSLnJlbW92ZUNoaWxkKFRPRE9fQ09OVEFJTkVSLmxhc3RDaGlsZCk7XG4gIH07XG4gIGNvbnNvbGUubG9nKCcxJyk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RCdG5FdmVudChidXR0b25Ob2RlKSB7XG4gIGNvbnN0IFRPRE9fQ09OVEFJTkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Db250YWluZXInKTtcbiAgY29uc3QgTkVXVE9ET19CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NvbnRhaW5lcl9fYWRkJyk7XG4gIGNsZWFyVG9kb0NvbnRhaW5lcigpO1xuICBORVdUT0RPX0JUTi5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIGxldCBsaXN0SW5kZXggPSArKGJ1dHRvbk5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xuICBsZXQgbGlzdCA9IHByb2plY3RzLmdldFByb2plY3QobGlzdEluZGV4KTtcbiAgbGV0IGl0ZW1zID0gbGlzdC5nZXRJdGVtcygpO1xuICBwcm9qZWN0cy5zZXRDdXJQcm9qZWN0KGxpc3RJbmRleCk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RzLmdldEN1clByb2plY3QoKS5nZXROYW1lKCkpO1xuICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGxldCBjYXJkID0gdG9kb0NhcmQoaXRlbS5nZXROYW1lKCksIGl0ZW0uZ2V0RGVzY3JpcHRpb24oKSwgaXRlbS5nZXREdWVEYXRlKCkpO1xuICAgIFRPRE9fQ09OVEFJTkVSLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cobGlzdC5nZXRJdGVtcygpKTtcbiAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZS50YXJnZXQpO1xuICAgICAgbGlzdC5kZWxldGVJdGVtKGluZGV4KTtcbiAgICAgIGNvbnNvbGUubG9nKGxpc3QuZ2V0SXRlbXMoKSk7XG4gICAgICBzdG9yZURhdGEoKTtcbiAgICAgIGdldERhdGEoKTtcbiAgICB9KVxuICB9KVxufVxuXG5cblxuZnVuY3Rpb24gbmV3VG9kb0J0bigpIHtcbiAgY29uc3QgTkVXX1RPT0RPTyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ29udGFpbmVyX19hZGQnKTtcbiAgTkVXX1RPT0RPTy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgVE9ET19GT1JNID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Db250YWluZXJfX2Zvcm0nKTtcbiAgICBUT0RPX0ZPUk0uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICB9KVxufVxuXG5mdW5jdGlvbiB0b2RvQ29uZmlybUJ0bkZvcm0oKSB7XG4gIGNvbnN0IENPTkZJUk1fQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Db250YWluZXJfX2NvbmZpcm0nKTtcbiAgQ09ORklSTV9CVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBUT0RPX05BTUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NvbnRhaW5lcl9fbmFtZScpO1xuICAgIGNvbnN0IFRPRE9fREVTQ1JJUFRJT04gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NvbnRhaW5lcl9fZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBUT0RPX0RVRURBVEUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NvbnRhaW5lcl9fZHVlZGF0ZScpO1xuICAgIGNvbnN0IFRPRE9fRk9STSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ29udGFpbmVyX19mb3JtJyk7XG4gICAgY29uc3QgVE9ET19DT05UQUlORVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NvbnRhaW5lcicpO1xuICAgIGxldCBuYW1lID0gVE9ET19OQU1FLnZhbHVlIHx8ICdkZWZhdWx0IG5hbWUnO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IFRPRE9fREVTQ1JJUFRJT04udmFsdWUgfHwgJ2RlZmF1bHQgZGVzY3JpcHRpb24nO1xuICAgIGxldCBkdWVEYXRlID0gVE9ET19EVUVEQVRFLnZhbHVlQXNEYXRlIHx8IG5ldyBEYXRlKCk7XG4gICAgbGV0IGl0ZW0gPSBuZXcgdG9kb0l0ZW0obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpO1xuICAgIHByb2plY3RzLmdldEN1clByb2plY3QoKS5hZGQoaXRlbSk7XG4gICAgVE9ET19DT05UQUlORVIuYXBwZW5kQ2hpbGQodG9kb0NhcmQoaXRlbS5nZXROYW1lKCksIGl0ZW0uZ2V0RGVzY3JpcHRpb24oKSwgaXRlbS5nZXREdWVEYXRlKCkpKTtcbiAgICBUT0RPX0ZPUk0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIFRPRE9fTkFNRS52YWx1ZSA9ICcnO1xuICAgIFRPRE9fTkFNRS52YWx1ZSB8fCAnZGVmYXVsdCBuYW1lJztcbiAgICBUT0RPX0RFU0NSSVBUSU9OLnZhbHVlID0gJyc7XG4gICAgVE9ET19EVUVEQVRFLnZhbHVlID0gJyc7XG4gICAgc3RvcmVEYXRhKCk7XG4gICAgZ2V0RGF0YSgpO1xuICB9KVxufVxuXG5mdW5jdGlvbiB0b2RvQ2FuY2VsQnRuRm9ybSgpIHtcbiAgY29uc3QgQ0FOQ0VMX0JUTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ29udGFpbmVyX19jYW5jZWwnKTtcbiAgQ0FOQ0VMX0JUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IFRPRE9fTkFNRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ29udGFpbmVyX19uYW1lJyk7XG4gICAgY29uc3QgVE9ET19ERVNDUklQVElPTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ29udGFpbmVyX19kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IFRPRE9fRFVFREFURSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ29udGFpbmVyX19kdWVkYXRlJyk7XG4gICAgY29uc3QgVE9ET19GT1JNID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Db250YWluZXJfX2Zvcm0nKTtcbiAgICBUT0RPX0ZPUk0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIFRPRE9fTkFNRS52YWx1ZSA9ICcnO1xuICAgIFRPRE9fTkFNRS52YWx1ZSB8fCAnZGVmYXVsdCBuYW1lJztcbiAgICBUT0RPX0RFU0NSSVBUSU9OLnZhbHVlID0gJyc7XG4gICAgVE9ET19EVUVEQVRFLnZhbHVlID0gJyc7XG4gIH0pXG59XG5cblxuZnVuY3Rpb24gZ2VuZXJhbEludGVyZmFjZSgpIHtcbiAgZ2V0RGF0YSgpO1xuICAvLyBzdG9yZURhdGEoKTtcbiAgYWxsUHJvamVjdHNCdG4oKTtcbiAgdG9kYXlQcm9qZWN0c0J0bigpO1xuICBmaW5pc2hlZFByb2plY3RzQnRuKCk7XG4gIHVuZmluaXNoZWRQcm9qZWN0c0J0bigpO1xuICBzaG93VG9kb0xpc3RzKCk7XG4gIGFkZFByb2plY3RCdG4oKTtcbiAgcHJvamVjdENvbmZpcm1CdG5Gb3JtKCk7XG4gIHByb2plY3RDYW5jZWxCdG5Gb3JtKCk7XG4gIHRvZG9Db25maXJtQnRuRm9ybSgpO1xuICB0b2RvQ2FuY2VsQnRuRm9ybSgpO1xuICBuZXdUb2RvQnRuKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYWxJbnRlcmZhY2U7IiwiaW1wb3J0IHNpbXBsZUh0bWxUYWcgZnJvbSBcIi4vX3NpbXBsZWZ1bnRpb25cIjtcblxuZnVuY3Rpb24gdG9kb0xpc3QocHJvamVjdE5hbWUpIHtcblxuICBsZXQgbmFtZSA9IHByb2plY3ROYW1lO1xuICBsZXQgcHJvamVjdCA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJdGVtcygpIHtcbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZCh0b2RvSXRlbSkge1xuICAgIHByb2plY3QucHVzaCh0b2RvSXRlbSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJdGVtKGluZGV4KSB7XG4gICAgcmV0dXJuIHByb2plY3RbaW5kZXhdO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlSXRlbShpbmRleCkge1xuICAgIGxldCBkZWxldGVkID0gcHJvamVjdC5zcGxpY2UoaW5kZXgsIDEpWzBdO1xuICAgIHJldHVybiBkZWxldGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiBwcm9qZWN0Lmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiB7IGdldEl0ZW1zLCBhZGQsIGdldEl0ZW0sIGRlbGV0ZUl0ZW0sIGdldExlbmd0aCwgZ2V0TmFtZSB9O1xufVxuZnVuY3Rpb24gcHJvamVjdENvbnRyb2xsZXIoKSB7XG4gIGNvbnN0IFBST0pFQ1QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgbGV0IGN1clByb2plY3QgPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gYWRkKHRvZG9MaXN0KSB7XG4gICAgcHJvamVjdHMucHVzaCh0b2RvTGlzdCk7XG4gICAgLy8gbGV0IG5ld1Byb2plY3QgPSBzaW1wbGVIdG1sVGFnLm1ha2VUYWcoJ2J1dHRvbicsICdwcm9qZWN0X19saXN0Jyk7XG4gICAgLy8gbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdE5hbWUnLCB0b2RvTGlzdC5nZXRQcm9qZWN0TmFtZSgpKVxuICAgIC8vIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgUFJPSkVDVC5jaGlsZEVsZW1lbnRDb3VudCAtIDIpO1xuICAgIC8vIG5ld1Byb2plY3QuaW5uZXJIVE1MID0gdG9kb0xpc3QuZ2V0UHJvamVjdE5hbWUoKTtcbiAgICAvLyBQUk9KRUNULmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICAgIHJldHVybiBwcm9qZWN0cy5sZW5ndGggLSAxO1xuICB9XG4gIGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFByb2plY3QoaW5kZXgpIHtcbiAgICByZXR1cm4gcHJvamVjdHNbaW5kZXhdO1xuICB9XG4gIGZ1bmN0aW9uIGdldFByb2plY3ROdW0oKSB7XG4gICAgcmV0dXJuIHByb2plY3RzLmxlbmd0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEN1clByb2plY3QoaW5kZXgpIHtcbiAgICBjdXJQcm9qZWN0ID0gZ2V0UHJvamVjdChpbmRleCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJQcm9qZWN0KCkge1xuICAgIHJldHVybiBjdXJQcm9qZWN0O1xuICB9XG4gIC8qKlxuICAqIHJldHVybiBpbmRleCBvciAtMVxuICAqL1xuICBmdW5jdGlvbiBmaW5kUHJvamVjdEluZGV4KHByb2plY3ROYW1lKSB7XG4gICAgcmV0dXJuIHByb2plY3RzLmZpbmRJZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICByZXR1cm4gcHJvamVjdHMuc3BsaWNlKGZpbmRQcm9qZWN0SW5kZXgocmVtb3ZlUHJvamVjdC5pbm5lckhUTUwpLCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQWxsKCkge1xuICAgIHByb2plY3RzID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VQcm9qZWN0TmFtZShuZXdOYW1lLCBwcm9qZWN0KSB7XG4gICAgcHJvamVjdHNbZmluZFByb2plY3RJbmRleChwcm9qZWN0LmlubmVySFRNTCldLnNldFByb2plY3ROYW1lKG5ld05hbWUpO1xuICAgIHByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3ROYW1lJywgbmV3TmFtZSk7XG4gIH1cblxuICByZXR1cm4geyBhZGQsIGZpbmRQcm9qZWN0SW5kZXgsIHJlbW92ZVByb2plY3QsIGNoYW5nZVByb2plY3ROYW1lLCBnZXRQcm9qZWN0cywgZ2V0UHJvamVjdCwgZ2V0UHJvamVjdE51bSwgc2V0Q3VyUHJvamVjdCwgZ2V0Q3VyUHJvamVjdCwgY2xlYXJBbGwgfTtcbn1cbmZ1bmN0aW9uIG5hdmJhcigpIHtcbiAgbGV0IG5hdkJhciA9IHNpbXBsZUh0bWxUYWcubWFrZURpdignbmF2YmFyJyk7XG4gIGxldCBzdGF0dXNEaXYgPSBzaW1wbGVIdG1sVGFnLm1ha2VEaXYoJ3N0YXR1cycpO1xuICBsZXQgYWxsQnRuID0gc2ltcGxlSHRtbFRhZy5tYWtlVGFnKCdidXR0b24nLCAnc3RhdHVzX19hbGwnKTtcbiAgYWxsQnRuLmlubmVySFRNTCA9ICdBTEwnO1xuICBsZXQgdG9kYXlCdG4gPSBzaW1wbGVIdG1sVGFnLm1ha2VUYWcoJ2J1dHRvbicsICdzdGF0dXNfX3RvZGF5Jyk7XG4gIHRvZGF5QnRuLmlubmVySFRNTCA9ICdUT0RBWSc7XG4gIGxldCBmaW5pc2VkQnRuID0gc2ltcGxlSHRtbFRhZy5tYWtlVGFnKCdidXR0b24nLCAnc3RhdHVzX19maW5pc2hlZCcpO1xuICBmaW5pc2VkQnRuLmlubmVySFRNTCA9ICdGSU5JU0hFRCc7XG4gIGxldCBub3RGaW5pc2VkQnRuID0gc2ltcGxlSHRtbFRhZy5tYWtlVGFnKCdidXR0b24nLCAnc3RhdHVzX19ub3RGaW5pc2VkJyk7XG4gIG5vdEZpbmlzZWRCdG4uaW5uZXJIVE1MID0gJ05PVCBGSU5JU0hFRCc7XG5cbiAgc3RhdHVzRGl2LmFwcGVuZENoaWxkKGFsbEJ0bik7XG4gIHN0YXR1c0Rpdi5hcHBlbmRDaGlsZCh0b2RheUJ0bik7XG4gIHN0YXR1c0Rpdi5hcHBlbmRDaGlsZChmaW5pc2VkQnRuKTtcbiAgc3RhdHVzRGl2LmFwcGVuZENoaWxkKG5vdEZpbmlzZWRCdG4pO1xuXG4gIGxldCBwcm9qZWN0RGl2ID0gc2ltcGxlSHRtbFRhZy5tYWtlRGl2KCdwcm9qZWN0Jyk7XG4gIGxldCBhZGRpbmdGb3JtID0gc2ltcGxlSHRtbFRhZy5tYWtlVGFnKCdmb3JtJywgJ3Byb2plY3RfX2Zvcm0nKTtcbiAgbGV0IHByb2plY3ROYW1lID0gc2ltcGxlSHRtbFRhZy5tYWtlVGFnKCdpbnB1dCcsICdwcm9qZWN0X19uYW1lJyk7XG4gIHByb2plY3ROYW1lLnR5cGUgPSAndGV4dCc7XG4gIHByb2plY3ROYW1lLnJlcXVpcmVkID0gdHJ1ZTtcbiAgcHJvamVjdE5hbWUucGxhY2Vob2xkZXIgPSAnTGlzdCBOYW1lJztcbiAgbGV0IGNvbmZpcm1CdG4gPSBzaW1wbGVIdG1sVGFnLm1ha2VUYWcoJ2J1dHRvbicsICdwcm9qZWN0X19jb25maXJtJyk7XG4gIGNvbmZpcm1CdG4uaW5uZXJIVE1MID0gJ0NvbmZpcm0nO1xuICBjb25maXJtQnRuLnR5cGUgPSAnc3VibWl0JztcbiAgbGV0IGNhbmNlbEJ0biA9IHNpbXBsZUh0bWxUYWcubWFrZVRhZygnYnV0dG9uJywgJ3Byb2plY3RfX2NhbmNlbCcpO1xuICBjYW5jZWxCdG4uaW5uZXJIVE1MID0gJ0NhbmNlbCc7XG4gIGxldCBhZGRQcm9qZWN0QnRuID0gc2ltcGxlSHRtbFRhZy5tYWtlVGFnKCdidXR0b24nLCAncHJvamVjdF9fYWRkJyk7XG4gIGFkZFByb2plY3RCdG4uaW5uZXJIVE1MID0gJysnO1xuXG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkaW5nRm9ybSk7XG4gIGFkZGluZ0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICBhZGRpbmdGb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuICBhZGRpbmdGb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG5cbiAgbmF2QmFyLmFwcGVuZENoaWxkKHN0YXR1c0Rpdik7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KVxuXG4gIHJldHVybiBuYXZCYXI7XG59XG5cblxuZXhwb3J0IHsgbmF2YmFyLCB0b2RvTGlzdCwgcHJvamVjdENvbnRyb2xsZXIgfTsiLCJjb25zdCBzaW1wbGVIdG1sVGFnID0gKGZ1bmN0aW9uICgpIHtcblxuICBjb25zdCBtYWtlVGFnID0gKHRhZ1R5cGUsIGNsYXNzTmFtZSkgPT4ge1xuICAgIGxldCBteVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnVHlwZSk7XG4gICAgaWYoY2xhc3NOYW1lIT09JycpIG15VGFnLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gbXlUYWc7XG4gIH1cbiAgY29uc3QgbWFrZURpdiA9IChjbGFzc05hbWUpID0+IHtcbiAgICBsZXQgZGl2ID0gbWFrZVRhZygnZGl2JywgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gZGl2O1xuICB9XG5cbiAgY29uc3QgbWFrZUxvZ28gPSAoY2xhc3NOYW1lLCBsb2dvTGluaykgPT4ge1xuICAgIGxldCBsb2dvID0gbWFrZVRhZygnaW1nJywgY2xhc3NOYW1lKTtcbiAgICBsb2dvLnNyYyA9IGxvZ29MaW5rO1xuICAgIHJldHVybiBsb2dvO1xuICB9XG5cblxuICBjb25zdCBtYWtlVGV4dCA9IChjbGFzc05hbWUsIHRleHRGb3JtYXQsIHRleHREZXNjcmlwdGlvbikgPT4ge1xuICAgIGxldCB0ZXh0ID0gbWFrZVRhZyh0ZXh0Rm9ybWF0LCBjbGFzc05hbWUpO1xuICAgIHRleHQuaW5uZXJIVE1MID0gdGV4dERlc2NyaXB0aW9uO1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cblxuXG4gIHJldHVybiB7IG1ha2VUYWcsIG1ha2VEaXYsIG1ha2VMb2dvLCBtYWtlVGV4dCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgc2ltcGxlSHRtbFRhZzsiLCJpbXBvcnQgc2ltcGxlSHRtbFRhZyBmcm9tIFwiLi9fc2ltcGxlZnVudGlvblwiO1xuXG5mdW5jdGlvbiB0b2RvQ2FyZChuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSl7XG4gIGxldCBjYXJkRGl2ID0gc2ltcGxlSHRtbFRhZy5tYWtlRGl2KCdjYXJkJyk7XG4gIGxldCBuYW1lUGFyID0gc2ltcGxlSHRtbFRhZy5tYWtlVGFnKCdwJywgJ2NhcmRfX25hbWUnKTtcbiAgbGV0IGRlc1BhciA9IHNpbXBsZUh0bWxUYWcubWFrZVRhZygncCcsICdjYXJkX19kZXNjcmlwdGlvbicpO1xuICBsZXQgZHVlRGF0ZVBhciA9IHNpbXBsZUh0bWxUYWcubWFrZVRhZygncCcsICdjYXJkX19kdWVkYXRlJyk7XG5cbiAgbmFtZVBhci50ZXh0Q29udGVudCA9ICdOYW1lOiAnICsgbmFtZTtcbiAgZGVzUGFyLnRleHRDb250ZW50ID0gJ05vdGU6ICcgKyBkZXNjcmlwdGlvbjtcbiAgZHVlRGF0ZVBhci50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTogJyArIGR1ZURhdGUudG9EYXRlU3RyaW5nKCk7XG5cbiAgY2FyZERpdi5hcHBlbmRDaGlsZChuYW1lUGFyKTtcbiAgY2FyZERpdi5hcHBlbmRDaGlsZChkZXNQYXIpO1xuICBjYXJkRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVQYXIpO1xuXG4gIHJldHVybiBjYXJkRGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b2RvQ2FyZDsiLCJpbXBvcnQgc2ltcGxlSHRtbFRhZyBmcm9tIFwiLi9fc2ltcGxlZnVudGlvblwiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcImRhdGUtZm5zL2NvbXBhcmVBc2NcIjtcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xuZnVuY3Rpb24gdG9kb0l0ZW0obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUvKiwgcHJvamVjdE5hbWUqLykge1xuICBsZXQgbXlOYW1lID0gbmFtZTtcbiAgbGV0IG15RGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgLy8gdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICBsZXQgbXlEdWVEYXRlID0gZHVlRGF0ZTtcbiAgbGV0IG15SXNEb25lID0gZmFsc2U7XG4gIGxldCBteUlzT3ZlckR1ZSA9IChjb21wYXJlQXNjKGR1ZURhdGUsIG5ldyBEYXRlKCkpID49IDApID8gZmFsc2UgOiB0cnVlO1xuXG4gIGZ1bmN0aW9uIHNldE5hbWUobmFtZSkge1xuICAgIG15TmFtZSA9IG5hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgIHJldHVybiBteU5hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIG15RGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiBteURlc2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gYmVsb25nVG9Qcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lO1xuICAvLyB9XG5cbiAgZnVuY3Rpb24gc2V0RHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgbXlEdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuICBmdW5jdGlvbiBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiBteUR1ZURhdGU7XG4gIH1cbiAgZnVuY3Rpb24gc2V0SXNEb25lKGlzRG9uZSkge1xuICAgIG15SXNEb25lID0gaXNEb25lO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SXNEb25lKCkge1xuICAgIHJldHVybiBteUlzRG9uZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldElzT3ZlckR1ZShpc092ZXJEdWUpIHtcbiAgICBteUlzT3ZlckR1ZSA9IGlzT3ZlckR1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElzT3ZlckR1ZSgpIHtcbiAgICByZXR1cm4gbXlJc092ZXJEdWU7XG4gIH1cblxuICByZXR1cm4geyBzZXROYW1lLCBnZXROYW1lLCBzZXREZXNjcmlwdGlvbiwgZ2V0RGVzY3JpcHRpb24sIHNldER1ZURhdGUsIGdldER1ZURhdGUsIHNldElzRG9uZSwgZ2V0SXNEb25lLCBzZXRJc092ZXJEdWUsIGdldElzT3ZlckR1ZSB9O1xufVxuXG5cbmZ1bmN0aW9uIHRvZG9Db250YWluZXIoKSB7XG4gIGxldCBsaXN0Q29udGFpbmVyID0gc2ltcGxlSHRtbFRhZy5tYWtlRGl2KCd0b2RvQ29udGFpbmVyJyk7XG4gIGxldCBpdGVtQWRkaW5nQnRuID0gc2ltcGxlSHRtbFRhZy5tYWtlVGFnKCdidXR0b24nLCAndG9kb0NvbnRhaW5lcl9fYWRkJyk7XG4gIGl0ZW1BZGRpbmdCdG4uaW5uZXJIVE1MID0gJ05ldyBUb29Eb28nO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1BZGRpbmdCdG4pO1xuXG5cbiAgbGV0IGl0ZW1BZGRpbmdGb3JtID0gc2ltcGxlSHRtbFRhZy5tYWtlVGFnKCdmb3JtJywgJ3RvZG9Db250YWluZXJfX2Zvcm0nKTtcbiAgbGV0IG5hbWVMYWJlbCA9IHNpbXBsZUh0bWxUYWcubWFrZVRhZygnbGFiZWwnLCAnJylcbiAgbGV0IGRlc2NyaXB0aW9uTGFiZWwgPSBzaW1wbGVIdG1sVGFnLm1ha2VUYWcoJ2xhYmVsJywgJycpXG4gIGxldCBkdWVEYXRlTGFiZWwgPSBzaW1wbGVIdG1sVGFnLm1ha2VUYWcoJ2xhYmVsJywgJycpXG4gIGxldCBpdGVtTmFtZSA9IHNpbXBsZUh0bWxUYWcubWFrZVRhZygnaW5wdXQnLCAndG9kb0NvbnRhaW5lcl9fbmFtZScpO1xuICBsZXQgaXRlbURlc2NyaXB0aW9uID0gc2ltcGxlSHRtbFRhZy5tYWtlVGFnKCdpbnB1dCcsICd0b2RvQ29udGFpbmVyX19kZXNjcmlwdGlvbicpO1xuICBsZXQgaXRlbUR1ZURhdGUgPSBzaW1wbGVIdG1sVGFnLm1ha2VUYWcoJ2lucHV0JywgJ3RvZG9Db250YWluZXJfX2R1ZWRhdGUnKTtcbiAgbGV0IGNvbmZpcm1CdG4gPSBzaW1wbGVIdG1sVGFnLm1ha2VUYWcoJ2J1dHRvbicsICd0b2RvQ29udGFpbmVyX19jb25maXJtJyk7XG4gIGNvbmZpcm1CdG4uaW5uZXJIVE1MID0gJ0NvbmZpcm0nO1xuICBjb25maXJtQnRuLnR5cGUgPSAnc3VibWl0JztcbiAgbGV0IGNhbmNlbEJ0biA9IHNpbXBsZUh0bWxUYWcubWFrZVRhZygnYnV0dG9uJywgJ3RvZG9Db250YWluZXJfX2NhbmNlbCcpO1xuICBjYW5jZWxCdG4uaW5uZXJIVE1MID0gJ0NhbmNlbCc7XG4gIGl0ZW1OYW1lLnR5cGUgPSAndGV4dCc7XG4gIGl0ZW1OYW1lLnJlcXVpcmVkID0gdHJ1ZTtcbiAgaXRlbU5hbWUucGxhY2Vob2xkZXIgPSAnVE9PRE9PIE5hbWUnO1xuICBpdGVtTmFtZS5pZCA9ICduYW1lJztcbiAgaXRlbURlc2NyaXB0aW9uLnR5cGUgPSAndGV4dCc7XG4gIGl0ZW1EZXNjcmlwdGlvbi5yZXF1aXJlZCA9IHRydWU7XG4gIGl0ZW1EZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9ICdUT09ET08gRGVzY3JpcHRpb24nO1xuICBpdGVtRGVzY3JpcHRpb24uaWQgPSAnZGVzY3JpcHRpb24nO1xuICBpdGVtRHVlRGF0ZS50eXBlID0gJ2RhdGUnO1xuICBpdGVtRHVlRGF0ZS5pZCA9ICdkdWVEYXRlJztcbiAgaXRlbUR1ZURhdGUubWluID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBtb250aCA9IChub3cuZ2V0TW9udGgoKSArIDEpIDwgMTAgPyAnMCcgKyAobm93LmdldE1vbnRoKCkgKyAxKSA6IChub3cuZ2V0TW9udGgoKSArIDEpO1xuICAgIGxldCBkYXkgPSBub3cuZ2V0RGF0ZSgpICsgMSA8IDEwID8gJzAnICsgbm93LmdldERhdGUoKSA6IG5vdy5nZXREYXRlKCk7XG4gICAgcmV0dXJuIHllYXIgKyAnLScgKyBtb250aCArICctJyArIGRheTtcbiAgfSkoKTtcbiAgbmFtZUxhYmVsLmlubmVySFRNTCA9ICdOYW1lJztcbiAgbmFtZUxhYmVsLmh0bWxGb3IgPSAnbmFtZSc7XG4gIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gJ0Rlc2NyaXB0aW9uJztcbiAgZGVzY3JpcHRpb25MYWJlbC5odG1sRm9yID0gJ2Rlc2NyaXB0aW9uJztcbiAgZHVlRGF0ZUxhYmVsLmlubmVySFRNTCA9ICdEdWUgZGF0ZSc7XG4gIGR1ZURhdGVMYWJlbC5odG1sRm9yID0gJ2R1ZURhdGUnO1xuXG4gIG5hbWVMYWJlbC5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gIGRlc2NyaXB0aW9uTGFiZWwuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcbiAgZHVlRGF0ZUxhYmVsLmFwcGVuZENoaWxkKGl0ZW1EdWVEYXRlKTtcblxuICBpdGVtQWRkaW5nRm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICBpdGVtQWRkaW5nRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgaXRlbUFkZGluZ0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgaXRlbUFkZGluZ0Zvcm0uYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG4gIGl0ZW1BZGRpbmdGb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtQWRkaW5nRm9ybSk7XG4gIHJldHVybiBsaXN0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgeyB0b2RvSXRlbSwgdG9kb0NvbnRhaW5lciB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGhlYWRlciBmcm9tIFwiLi9faGVhZGVyXCI7XG5pbXBvcnQgeyBuYXZiYXJ9IGZyb20gXCIuL19uYXZiYXJcIjtcbmltcG9ydCB7IHRvZG9JdGVtLCB0b2RvQ29udGFpbmVyIH0gZnJvbSBcIi4vX3RvZG9Db250YWluZXJcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vX2Zvb3RlclwiO1xuaW1wb3J0IGdlbmVyYWxJbnRlcmZhY2UgZnJvbSBcIi4vX2ludGVyZmFjZVwiO1xuaW1wb3J0ICcuLi9kaXN0L2Nzcy9tYWluLmNzcydcbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IENPTlRFTlQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCBteUhlYWRlciA9IGhlYWRlcigpO1xuICBjb25zdCBteU5hdkJhciA9IG5hdmJhcigpO1xuICBjb25zdCBteVRvZG9Db250YWluZXIgPSB0b2RvQ29udGFpbmVyKCk7XG4gIGNvbnN0IG15Rm9vdGVyID0gZm9vdGVyKCk7XG5cbiAgQ09OVEVOVC5hcHBlbmRDaGlsZChteUhlYWRlcik7XG4gIENPTlRFTlQuYXBwZW5kQ2hpbGQobXlOYXZCYXIpO1xuICBDT05URU5ULmFwcGVuZENoaWxkKG15VG9kb0NvbnRhaW5lcik7XG4gIENPTlRFTlQuYXBwZW5kQ2hpbGQobXlGb290ZXIpO1xuXG4gIGNvbnN0IG15SW50ZXJmYWNlID0gZ2VuZXJhbEludGVyZmFjZSgpO1xuICAvLyB0ZXN0aW5nIGFyZWFcbiAgLy8gbGV0IHRvZG8xID0gbmV3IHRvZG9JdGVtKCd0ZXN0MScsICd0ZXN0MURlcycsIG5ldyBEYXRlKDIwMjIsIDEsIDEpKTtcbiAgLy8gbGV0IHRvZG8yID0gbmV3IHRvZG9JdGVtKCd0ZXN0MScsICd0ZXN0MURlcycsIG5ldyBEYXRlKDIwMjIsIDIsIDEpKTtcbiAgLy8gbGV0IGxpc3QxID0gbmV3IHRvZG9MaXN0KCdQcm9qZWN0IDEgdGVzdCcpO1xuICAvLyBsaXN0MS5hZGQodG9kbzEpO1xuICAvLyBsaXN0MS5hZGQodG9kbzIpO1xuICAvLyBjb250cm9sZXJzXG4gIC8vIGxldCBteVByb2plY3RDb250cm9sbGVyID0gbmV3IHByb2plY3RDb250cm9sbGVyKCk7XG4gIC8vIGNvbnNvbGUubG9nKG15UHJvamVjdENvbnRyb2xsZXIuZ2V0UHJvamVjdHMoKSk7XG4gIC8vIGVuZCBvZiB0ZXN0aW5nIGFyZWFcbn1cblxubWFpbigpOyJdLCJzb3VyY2VSb290IjoiIn0=