(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app/app.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/app.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"(isHandset$ | async) === false\"\n  >\n    <mat-card class=\"menu-photo mat-elevation-z3\"> </mat-card>\n    <mat-nav-list>\n      <a mat-list-item class=\"menu-item\">\n        <fa-icon [icon]=\"['fas', 'home']\"></fa-icon>Home\n      </a>\n      <a mat-list-item class=\"menu-item\">\n        <fa-icon [icon]=\"['fas', 'user']\"></fa-icon>About\n      </a>\n      <a mat-list-item class=\"menu-item\">\n        <fa-icon [icon]=\"['fas', 'briefcase']\"></fa-icon>Experience\n      </a>\n      <a mat-list-item class=\"menu-item\">\n        <fa-icon [icon]=\"['fas', 'chess-board']\"></fa-icon>Skills\n      </a>\n      <a mat-list-item class=\"menu-item\">\n        <fa-icon [icon]=\"['fas', 'user-astronaut']\"></fa-icon>Projects\n      </a>\n      <a mat-list-item class=\"menu-item\">\n        <fa-icon [icon]=\"['fas', 'id-card']\"></fa-icon>Contact\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar>\n      <button\n        class=\"menu-button\"\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n      >\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <app-landing></app-landing>\n    <app-about></app-about>\n    <app-experience></app-experience>\n    <app-skills></app-skills>\n    <app-projects></app-projects>\n    <app-footer></app-footer>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"content mat-elevation-z0\">\n  <mat-card-header>\n    <mat-card-title>About</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-card class=\"card-stuff mat-elevation-z3\">\n      <p>{{ about.description }}</p>\n    </mat-card>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/experience/experience.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/experience/experience.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"content mat-elevation-z0\">\n  <mat-card-header>\n    <mat-card-title>Experience</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <div *ngFor=\"let position of experience; last as last\">\n      <app-position [position]=\"position\"></app-position>\n      <mat-divider [inset]=\"true\" *ngIf=\"!last\"></mat-divider>\n    </div>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"content mat-elevation-z0\">\n  <mat-card-header>\n    <mat-card-title>Get in Touch</mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"card-content\">\n    <div class=\"footer-body\">\n      <div class=\"top-footer-area\">\n        <div class=\"social-section\">\n          Lets connect:\n          <a\n            *ngFor=\"let contact of contacts\"\n            href=\"{{ contact.urlLink }}\"\n            target=\"_blank\"\n          >\n            <fa-icon [icon]=\"['fab', contact.title]\"></fa-icon>\n            {{ contact.username }}\n          </a>\n        </div>\n        <div class=\"email-section\">\n          <span style=\"margin-left: 16px\">Prefer Email?</span>\n          <div class=\"email-field\">\n              <span style=\"display: flex; flex-grow: 1\">{{ email }}</span><fa-icon [icon]=\"['far', 'copy']\" (click)=\"copyMail()\"></fa-icon>\n          </div>\n        </div>\n      </div>\n      <div class=\"copyright-section\">\n        <fa-icon [icon]=\"['far', 'copyright']\"></fa-icon> 2020 John Wayodi\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"landing-content\">\n  <div class=\"profile-info\">\n    <h1>{{ user.name }}</h1>\n    <h3>{{ user.title }}</h3>\n    <p>{{ user.quote }}</p>\n    <div class=\"social-info\">\n      <a\n        href=\"{{ user.linkedin }}\"\n        target=\"_blank\"\n      >\n        <fa-icon [icon]=\"['fab', 'linkedin']\"></fa-icon>\n      </a>\n      <a\n        href=\"{{ user.github }}\"\n        target=\"_blank\"\n      >\n        <fa-icon [icon]=\"['fab', 'github']\"></fa-icon>\n      </a>\n      <a\n        href=\"{{ user.twitter }}\"\n        target=\"_blank\"\n      >\n        <fa-icon [icon]=\"['fab', 'twitter']\"></fa-icon>\n      </a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/position/position.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/position/position.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"position-content mat-elevation-z3\">\n  <mat-card-title style=\"font-size: 18px;\">{{ position.title }}</mat-card-title>\n  <mat-card-subtitle>\n    <span id=\"jobInfo\">\n      <a href=\"{{ position.companyLink }}\" target=\"_blank\" id=\"compName\">{{\n        position.companyName\n      }}</a>\n      <span id=\"jobType\">{{ position.employmentType }}</span>\n      <span id=\"duration\">{{ position.duration }}</span>\n    </span>\n    <span id=\"dateStuff\"\n      >{{ position.startDate }} - {{ position.endDate }}</span\n    >\n  </mat-card-subtitle>\n  <mat-card-content class=\"card-stuff\">\n    <p>\n      {{ position.summary }}\n    </p>\n    <ul>\n      <li *ngFor=\"let highlight of position.highlights\">{{ highlight }}</li>\n    </ul>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/project/project.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/project/project.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"content mat-elevation-z3\">\n  <mat-card-content class=\"project-details\">\n    <div\n      class=\"project-image\"\n      [ngStyle]=\"{\n        'background-image': 'url(' + project.imagePath + ')',\n        'background-size': 'cover',\n        'background-repeat': 'no-repeat'\n      }\"\n    ></div>\n    <div class=\"info-content\">\n      <h3 style=\"height: 12px;\">\n        {{ project.title }}\n      </h3>\n      <div class=\"project-links\">\n        <a href=\"{{ project.projectUrl }}\" target=\"_blank\">\n          <span>\n            View<fa-icon [icon]=\"['fas', 'external-link-alt']\"></fa-icon>\n          </span>\n        </a>\n        <a href=\"{{ project.repoUrl }}\" target=\"_blank\">\n          <span> Project<fa-icon [icon]=\"['fab', 'github']\"></fa-icon> </span>\n        </a>\n      </div>\n      {{ project.description }}\n      <ul>\n        <li *ngFor=\"let highlight of project.highlights\">{{ highlight }}</li>\n      </ul>\n    </div>\n    <div class=\"project-footer\">\n      <mat-card class=\"stack-item\" *ngFor=\"let item of project.stack\">\n        {{ item }}\n      </mat-card>\n    </div>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"projects-content mat-elevation-z0\">\n  <mat-card-header>\n    <mat-card-title>Projects</mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"project-list\">\n    <cdk-virtual-scroll-viewport\n      orientation=\"horizontal\"\n      itemSize=\"projects.length\"\n      class=\"project-list-viewport\"\n    >\n      <app-project\n        *cdkVirtualFor=\"let project of projects\"\n        [project]=\"project\"\n      ></app-project>\n    </cdk-virtual-scroll-viewport>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skill-item/skill-item.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/skill-item/skill-item.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"content mat-elevation-z3\">\n  <mat-card-content>\n    <div class=\"skill-image\">\n      <div *ngIf=\"skill.asset; else elseBlock\">\n        <mat-icon svgIcon=\"{{ skill.language }}\"></mat-icon>\n      </div>\n      <ng-template #elseBlock>\n        <fa-icon [icon]=\"['fab', skill.iconName]\"></fa-icon>\n      </ng-template>\n    </div>\n    <div class=\"skill-content\">\n      <p>{{ skill.language | titlecase }}</p>\n    </div>\n    <mat-progress-bar\n      class=\"progress-section\"\n      mode=\"determinate\"\n      value=\"{{ skill.level }}\"\n    ></mat-progress-bar>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skills/skills.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/skills/skills.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"content mat-elevation-z0\">\n  <mat-card-header>\n    <mat-card-title>Skills</mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"skill-items\">\n    <app-skill-item\n      *ngFor=\"let skill of skills\"\n      [skill]=\"skill\"\n    ></app-skill-item>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/app.component */ "./src/app/app/app.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/project/project.component */ "./src/app/components/project/project.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony import */ var _components_position_position_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/position/position.component */ "./src/app/components/position/position.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_skill_item_skill_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/skill-item/skill-item.component */ "./src/app/components/skill-item/skill-item.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
            _components_project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
            _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
            _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_12__["ExperienceComponent"],
            _components_position_position_component__WEBPACK_IMPORTED_MODULE_13__["PositionComponent"],
            _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_14__["LandingComponent"],
            _components_skill_item_skill_item_component__WEBPACK_IMPORTED_MODULE_15__["SkillItemComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ],
        providers: [],
        bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/app/app.component.scss":
/*!****************************************!*\
  !*** ./src/app/app/app.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n  width: 100%;\n}\n\n.sidenav {\n  width: 250px;\n  padding-top: 120px;\n  background-color: #232c33;\n  border-right: none;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  font-family: \"Play\", sans-serif;\n  background-color: transparent;\n  margin-bottom: -64px;\n}\n\n.menu-photo {\n  height: 100px;\n  width: 100px;\n  background: url('johnwayodi.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 50%;\n  margin-left: 16px;\n  margin-bottom: 16px;\n  padding: 0;\n}\n\n.menu-button {\n  border-radius: 50%;\n  background-color: #232c33;\n  color: #bed8d4;\n}\n\n.menu-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-family: \"Play\", sans-serif;\n  color: #bed8d4;\n  padding: 8px 16px 8px 16px;\n}\n\n.menu-item fa-icon {\n  font-size: 20px;\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hud2F5b2RpL3Byb2plY3RzL3BvcnRmb2xpby9zcmMvYXBwL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7QUNERjs7QURJQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FDREY7O0FER0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ2xvYmFscy5zY3NzJztcblxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMmMzMztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtZmFtaWx5OiAnUGxheScsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiAtNjRweDtcbn1cblxuLm1lbnUtcGhvdG8ge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9qb2hud2F5b2RpLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWVudS1idXR0b257XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMmMzMztcbiAgY29sb3I6ICNiZWQ4ZDQ7XG59XG5cbi5tZW51LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogJ1BsYXknLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2JlZDhkNDtcbiAgcGFkZGluZzogOHB4IDE2cHggOHB4IDE2cHg7XG5cbiAgZmEtaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgfVxufVxuIiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMmMzMztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IC02NHB4O1xufVxuXG4ubWVudS1waG90byB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9qb2hud2F5b2RpLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1lbnUtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyYzMzO1xuICBjb2xvcjogI2JlZDhkNDtcbn1cblxuLm1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNiZWQ4ZDQ7XG4gIHBhZGRpbmc6IDhweCAxNnB4IDhweCAxNnB4O1xufVxuLm1lbnUtaXRlbSBmYS1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/app/app.component.ts":
/*!**************************************!*\
  !*** ./src/app/app/app.component.ts ***!
  \**************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







const iconAssets = [
    { name: 'typeScript', path: '../assets/icons/typescript.svg' },
    { name: 'dart', path: '../assets/icons/dart-logo.svg' },
    { name: 'golang', path: '../assets/icons/golang.svg' },
    { name: 'redux', path: '../assets/icons/redux.svg' },
    { name: 'spring', path: '../assets/icons/spring-logo.svg' },
    { name: 'android', path: '../assets/icons/android.svg' },
    { name: 'flutter', path: '../assets/icons/flutter.svg' },
    { name: 'nestJs', path: '../assets/icons/nestjs.svg' },
    { name: 'profile-pic', path: '../assets/icons/wayodi.svg' },
];
let AppComponent = class AppComponent {
    constructor(breakpointObserver, matIconRegistry, domSanitizer) {
        this.breakpointObserver = breakpointObserver;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((result) => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])());
        Object(lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"])(iconAssets, (icon) => {
            this.matIconRegistry.addSvgIcon(icon.name, this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path));
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  max-width: 1440px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  border-radius: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  font-family: \"Play\", sans-serif;\n}\n\n.card-stuff {\n  font-family: \"Maven Pro\", sans-serif;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hud2F5b2RpL3Byb2plY3RzL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLCtCQUFBO0FDREY7O0FESUE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2dsb2JhbHMuc2Nzcyc7XG5cbi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1mYW1pbHk6ICdQbGF5Jywgc2Fucy1zZXJpZjtcbn1cblxuLmNhcmQtc3R1ZmYge1xuICBmb250LWZhbWlseTogJ01hdmVuIFBybycsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbiIsIi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1mYW1pbHk6IFwiUGxheVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2FyZC1zdHVmZiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdmVuIFByb1wiLCBzYW5zLXNlcmlmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portfolio */ "./src/app/portfolio.ts");



let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
        this.about = src_app_portfolio__WEBPACK_IMPORTED_MODULE_2__["portfolio"].about;
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/components/experience/experience.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/experience/experience.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  font-family: \"Play\", sans-serif;\n  max-width: 1440px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  border-radius: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hud2F5b2RpL3Byb2plY3RzL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2dsb2JhbHMuc2Nzcyc7XG5cbi5jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6ICdQbGF5Jywgc2Fucy1zZXJpZjtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiIsIi5jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUGxheVwiLCBzYW5zLXNlcmlmO1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/experience/experience.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portfolio */ "./src/app/portfolio.ts");



let ExperienceComponent = class ExperienceComponent {
    constructor() { }
    ngOnInit() {
        this.experience = src_app_portfolio__WEBPACK_IMPORTED_MODULE_2__["portfolio"].experience;
    }
};
ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/experience/experience.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experience.component.scss */ "./src/app/components/experience/experience.component.scss")).default]
    })
], ExperienceComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  max-width: 1440px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  border-radius: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  font-family: \"Play\", sans-serif;\n  color: #bed8d4;\n  background-color: #232c33;\n}\n\n.card-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 2;\n          flex-grow: 2;\n}\n\n.footer-body {\n  height: 100%;\n  width: 100%;\n  display: -webkit-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  color: #bed8d4;\n}\n\n.top-footer-area {\n  display: -webkit-flex;\n  -webkit-box-flex: 2;\n          flex-grow: 2;\n}\n\n.social-section {\n  margin-top: 5%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 150px;\n  font-family: \"Maven Pro\", sans-serif;\n  padding-left: 16px;\n}\n\n.social-section a {\n  color: #499f68;\n  font-size: 16px;\n  margin: 8px 0 8px 0;\n  text-decoration: none;\n}\n\n.social-section a fa-icon {\n  padding-right: 4px;\n}\n\n.email-section {\n  font-family: \"Maven Pro\", sans-serif;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 5%;\n  padding: 0 16px 0 16px;\n}\n\n.email-field {\n  border: 1px solid #bed8d4;\n  border-radius: 16px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 16px;\n  padding: 16px 16px 16px 16px;\n  display: -webkit-box;\n  display: flex;\n  max-width: 200px;\n  font-size: 15px;\n}\n\n@media only screen and (max-width: 575px) {\n  .email-field {\n    font-size: 12px;\n  }\n}\n\n.copyright-section {\n  align-self: flex-end;\n  padding-top: 16px;\n  height: 32px;\n  font-size: 12px;\n  font-family: \"Maven Pro\", sans-serif;\n  text-align: center;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hud2F5b2RpL3Byb2plY3RzL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2pvaG53YXlvZGkvcHJvamVjdHMvcG9ydGZvbGlvL3NyYy9zdHlsZXMvZ2xvYmFscy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0RGOztBRElBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREdFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDREo7O0FER0k7RUFDRSxrQkFBQTtBQ0ROOztBRE1BO0VBQ0Usb0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNIRjs7QURNQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSEY7O0FDaEVJO0VGMkRKO0lBV0ksZUFBQTtFQ0ZGO0FBQ0Y7O0FES0E7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsV0FBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2dsb2JhbHMuc2Nzcyc7XG5cbi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LWZhbWlseTogJ1BsYXknLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2JlZDhkNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMmMzMztcbn1cblxuLmNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMjtcbn1cblxuLmZvb3Rlci1ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogI2JlZDhkNDtcbn1cblxuLnRvcC1mb290ZXItYXJlYSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZmxleC1ncm93OiAyO1xufVxuXG4uc29jaWFsLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB3aWR0aDogMTUwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTWF2ZW4gUHJvJywgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuXG4gIGEge1xuICAgIGNvbG9yOiAjNDk5ZjY4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDhweCAwIDhweCAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIGZhLWljb24ge1xuICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgIH1cbiAgfVxufVxuXG4uZW1haWwtc2VjdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiAnTWF2ZW4gUHJvJywgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgcGFkZGluZzogMCAxNnB4IDAgMTZweDtcbn1cblxuLmVtYWlsLWZpZWxkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JlZDhkNDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuXG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8oaGFuZGhlbGRzKSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5cbi5jb3B5cmlnaHQtc2VjdGlvbiB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiAnTWF2ZW4gUHJvJywgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWdyb3c6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNiZWQ4ZDQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzJjMzM7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDI7XG59XG5cbi5mb290ZXItYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICNiZWQ4ZDQ7XG59XG5cbi50b3AtZm9vdGVyLWFyZWEge1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGZsZXgtZ3JvdzogMjtcbn1cblxuLnNvY2lhbC1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgd2lkdGg6IDE1MHB4O1xuICBmb250LWZhbWlseTogXCJNYXZlbiBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLnNvY2lhbC1zZWN0aW9uIGEge1xuICBjb2xvcjogIzQ5OWY2ODtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDhweCAwIDhweCAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc29jaWFsLXNlY3Rpb24gYSBmYS1pY29uIHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuXG4uZW1haWwtc2VjdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdmVuIFByb1wiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDUlO1xuICBwYWRkaW5nOiAwIDE2cHggMCAxNnB4O1xufVxuXG4uZW1haWwtZmllbGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmVkOGQ0O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5lbWFpbC1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5cbi5jb3B5cmlnaHQtc2VjdGlvbiB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdmVuIFByb1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMTtcbiAgd2lkdGg6IDEwMCU7XG59IiwiLy8gUmVzcG9uc2l2ZW5lc3NcbiRicmVhay1zbWFsbDogNTc1cHg7XG4kYnJlYWstbGFyZ2U6IDEwMjRweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gIEBpZiAkbWVkaWEgPT0gaGFuZGhlbGRzIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicmVhay1zbWFsbCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtZWRpdW0tc2NyZWVucyB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstc21hbGwgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcmdlIC0gMSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSB3aWRlLXNjcmVlbnMge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhcmdlKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var src_app_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/portfolio */ "./src/app/portfolio.ts");




let FooterComponent = class FooterComponent {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
    }
    ngOnInit() {
        this.contacts = src_app_portfolio__WEBPACK_IMPORTED_MODULE_3__["portfolio"].contacts;
        this.email = src_app_portfolio__WEBPACK_IMPORTED_MODULE_3__["portfolio"].user.email;
    }
    copyMail() {
        this._snackBar.open('Email copied', 'Copied', {
            duration: 2000,
        });
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/landing/landing.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".landing-content {\n  min-height: 100vh;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  background-color: #232c33;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n@media only screen and (max-width: 575px) {\n  .landing-content {\n    height: 102%;\n  }\n}\n.profile-info {\n  align-self: flex-end;\n  margin-left: 32px;\n  color: #bed8d4;\n}\n.profile-info h1 {\n  font-family: \"Julius Sans One\", sans-serif;\n}\n.profile-info h3,\n.profile-info p {\n  font-family: \"Maven Pro\", sans-serif;\n}\n.profile-info h1,\n.profile-info h3,\n.profile-info p {\n  font-weight: 400;\n}\n.profile-info p {\n  max-width: 85%;\n}\n.social-info {\n  display: -webkit-box;\n  display: flex;\n  height: 64px;\n}\n.social-info fa-icon {\n  color: #bed8d4;\n  font-size: 24px;\n  padding: 20px 20px 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hud2F5b2RpL3Byb2plY3RzL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9qb2hud2F5b2RpL3Byb2plY3RzL3BvcnRmb2xpby9zcmMvc3R5bGVzL2dsb2JhbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtBQ0RGO0FDREk7RUZKSjtJQVlJLFlBQUE7RUNIRjtBQUNGO0FETUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0hGO0FES0U7RUFDRSwwQ0FBQTtBQ0hKO0FETUU7O0VBRUUsb0NBQUE7QUNKSjtBRE9FOzs7RUFHRSxnQkFBQTtBQ0xKO0FEUUU7RUFDRSxjQUFBO0FDTko7QURVQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7QUNQRjtBRFNFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvZ2xvYmFscy5zY3NzJztcblxuLmxhbmRpbmctY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyYzMzO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC8vIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9qb2hud2F5b2RpLnBuZycpO1xuICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8oaGFuZGhlbGRzKXtcbiAgICBoZWlnaHQ6IDEwMiU7XG4gIH1cbn1cblxuLnByb2ZpbGUtaW5mbyB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBtYXJnaW4tbGVmdDogMzJweDtcbiAgY29sb3I6ICNiZWQ4ZDQ7XG5cbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIGgzLFxuICBwIHtcbiAgICBmb250LWZhbWlseTogJ01hdmVuIFBybycsIHNhbnMtc2VyaWY7XG4gIH1cblxuICBoMSxcbiAgaDMsXG4gIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cblxuICBwIHtcbiAgICBtYXgtd2lkdGg6IDg1JTtcbiAgfVxufVxuXG4uc29jaWFsLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDY0cHg7XG5cbiAgZmEtaWNvbiB7XG4gICAgY29sb3I6ICNiZWQ4ZDQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDA7XG4gIH1cbn1cbiIsIi5sYW5kaW5nLWNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMmMzMztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAubGFuZGluZy1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMiU7XG4gIH1cbn1cblxuLnByb2ZpbGUtaW5mbyB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBtYXJnaW4tbGVmdDogMzJweDtcbiAgY29sb3I6ICNiZWQ4ZDQ7XG59XG4ucHJvZmlsZS1pbmZvIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiSnVsaXVzIFNhbnMgT25lXCIsIHNhbnMtc2VyaWY7XG59XG4ucHJvZmlsZS1pbmZvIGgzLFxuLnByb2ZpbGUtaW5mbyBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF2ZW4gUHJvXCIsIHNhbnMtc2VyaWY7XG59XG4ucHJvZmlsZS1pbmZvIGgxLFxuLnByb2ZpbGUtaW5mbyBoMyxcbi5wcm9maWxlLWluZm8gcCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ucHJvZmlsZS1pbmZvIHAge1xuICBtYXgtd2lkdGg6IDg1JTtcbn1cblxuLnNvY2lhbC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuLnNvY2lhbC1pbmZvIGZhLWljb24ge1xuICBjb2xvcjogI2JlZDhkNDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAwO1xufSIsIi8vIFJlc3BvbnNpdmVuZXNzXG4kYnJlYWstc21hbGw6IDU3NXB4O1xuJGJyZWFrLWxhcmdlOiAxMDI0cHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICBAaWYgJG1lZGlhID09IGhhbmRoZWxkcyB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbWVkaXVtLXNjcmVlbnMge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXNtYWxsICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXJnZSAtIDEpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gd2lkZS1zY3JlZW5zIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1sYXJnZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portfolio */ "./src/app/portfolio.ts");



let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() {
        this.user = src_app_portfolio__WEBPACK_IMPORTED_MODULE_2__["portfolio"].user;
        this.contacts = src_app_portfolio__WEBPACK_IMPORTED_MODULE_2__["portfolio"].contacts;
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.scss */ "./src/app/components/landing/landing.component.scss")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/components/position/position.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/position/position.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".position-content {\n  font-family: \"Play\", sans-serif;\n  margin: 16px auto 16px;\n  border: 1px solid lightgrey;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 8px;\n}\n.position-content .mat-card-subtitle {\n  display: -webkit-box;\n  display: flex;\n}\n@media only screen and (max-width: 575px) {\n  .position-content .mat-card-subtitle {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n.card-stuff {\n  font-family: \"Maven Pro\", sans-serif;\n}\n#compName {\n  margin-right: 8px;\n  color: #499f68;\n  text-decoration: none;\n}\n#jobType {\n  margin-right: 8px;\n}\n#jobInfo {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hud2F5b2RpL3Byb2plY3RzL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvcG9zaXRpb24vcG9zaXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcG9zaXRpb24vcG9zaXRpb24uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvam9obndheW9kaS9wcm9qZWN0cy9wb3J0Zm9saW8vc3JjL3N0eWxlcy9nbG9iYWxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0RGO0FER0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNESjtBQ0hJO0VGR0Y7SUFJSSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUNBSjtBQUNGO0FESUE7RUFDRSxvQ0FBQTtBQ0RGO0FESUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0RGO0FESUE7RUFDRSxpQkFBQTtBQ0RGO0FESUE7RUFDRSxtQkFBQTtVQUFBLFlBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zaXRpb24vcG9zaXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvZ2xvYmFscy5zY3NzJztcblxuLnBvc2l0aW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogJ1BsYXknLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDE2cHggYXV0byAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAubWF0LWNhcmQtc3VidGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKGhhbmRoZWxkcykge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQtc3R1ZmYge1xuICBmb250LWZhbWlseTogJ01hdmVuIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbiNjb21wTmFtZSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBjb2xvcjogIzQ5OWY2ODtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jam9iVHlwZSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4jam9iSW5mbyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiIsIi5wb3NpdGlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiUGxheVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDE2cHggYXV0byAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5wb3NpdGlvbi1jb250ZW50IC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5wb3NpdGlvbi1jb250ZW50IC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4uY2FyZC1zdHVmZiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdmVuIFByb1wiLCBzYW5zLXNlcmlmO1xufVxuXG4jY29tcE5hbWUge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgY29sb3I6ICM0OTlmNjg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2pvYlR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuI2pvYkluZm8ge1xuICBmbGV4LWdyb3c6IDE7XG59IiwiLy8gUmVzcG9uc2l2ZW5lc3NcbiRicmVhay1zbWFsbDogNTc1cHg7XG4kYnJlYWstbGFyZ2U6IDEwMjRweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gIEBpZiAkbWVkaWEgPT0gaGFuZGhlbGRzIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicmVhay1zbWFsbCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtZWRpdW0tc2NyZWVucyB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstc21hbGwgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcmdlIC0gMSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSB3aWRlLXNjcmVlbnMge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhcmdlKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/position/position.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/position/position.component.ts ***!
  \***********************************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PositionComponent = class PositionComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PositionComponent.prototype, "position", void 0);
PositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-position',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./position.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/position/position.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./position.component.scss */ "./src/app/components/position/position.component.scss")).default]
    })
], PositionComponent);



/***/ }),

/***/ "./src/app/components/project/project.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/project/project.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  margin: 16px 5px 16px 5px;\n  height: 420px;\n  width: 240px;\n  border: none;\n  border-radius: 8px;\n  padding: 0;\n  font-family: \"Maven Pro\", sans-serif;\n}\n\n.project-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n}\n\n.project-image {\n  height: 128px;\n  width: 100%;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\n.info-content {\n  padding: 8px;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.info-content h3 {\n  font-family: \"Play\", sans-serif;\n  font-size: 18px;\n}\n\n.project-links {\n  margin-bottom: 10px;\n}\n\n.project-links a {\n  color: #499f68;\n  text-decoration: none;\n}\n\n.project-links span {\n  margin-right: 24px;\n}\n\n.project-links span fa-icon {\n  margin-left: 4px;\n}\n\n.project-footer {\n  width: 100%;\n  padding: 0;\n  align-self: flex-end;\n  height: 50px;\n  display: -webkit-box;\n  display: flex;\n  background-color: #232c33;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n.stack-item {\n  font-size: 12px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 4px;\n  height: 14px;\n  margin: auto 4px auto 4px;\n  font-family: \"Maven Pro\", sans-serif;\n  color: #232c33;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hud2F5b2RpL3Byb2plY3RzL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7QUNIRjs7QURNQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQ0hGOztBRElFO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0FDRko7O0FETUE7RUFDRSxtQkFBQTtBQ0hGOztBREtFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDSEo7O0FES0U7RUFDRSxrQkFBQTtBQ0hKOztBREtJO0VBQ0UsZ0JBQUE7QUNITjs7QURRQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvZ2xvYmFscy5zY3NzJztcblxuLy8gJ2JveC1zaGFkb3cnOiAnaW5zZXQgMHB4IDBweCA4cHggcmdiYSgwLDAsMCwwLjkpJ1xuXG4uY29udGVudCB7XG4gIG1hcmdpbjogMTZweCA1cHggMTZweCA1cHg7XG4gIGhlaWdodDogNDIwcHg7XG4gIHdpZHRoOiAyNDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiAnTWF2ZW4gUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLnByb2plY3QtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnByb2plY3QtaW1hZ2Uge1xuICBoZWlnaHQ6IDEyOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG4uaW5mby1jb250ZW50IHtcbiAgcGFkZGluZzogOHB4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGgzIHtcbiAgICBmb250LWZhbWlseTogJ1BsYXknLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuXG4ucHJvamVjdC1saW5rcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgYSB7XG4gICAgY29sb3I6ICM0OTlmNjg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIHNwYW4ge1xuICAgIG1hcmdpbi1yaWdodDogMjRweDtcblxuICAgIGZhLWljb24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG4gIH1cbn1cblxuLnByb2plY3QtZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzJjMzM7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbn1cblxuLnN0YWNrLWl0ZW0ge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbjogYXV0byA0cHggYXV0byA0cHg7XG4gIGZvbnQtZmFtaWx5OiAnTWF2ZW4gUHJvJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMyMzJjMzM7XG59XG4iLCIuY29udGVudCB7XG4gIG1hcmdpbjogMTZweCA1cHggMTZweCA1cHg7XG4gIGhlaWdodDogNDIwcHg7XG4gIHdpZHRoOiAyNDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdmVuIFByb1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ucHJvamVjdC1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucHJvamVjdC1pbWFnZSB7XG4gIGhlaWdodDogMTI4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG59XG5cbi5pbmZvLWNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5pbmZvLWNvbnRlbnQgaDMge1xuICBmb250LWZhbWlseTogXCJQbGF5XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnByb2plY3QtbGlua3Mge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnByb2plY3QtbGlua3MgYSB7XG4gIGNvbG9yOiAjNDk5ZjY4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ucHJvamVjdC1saW5rcyBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuLnByb2plY3QtbGlua3Mgc3BhbiBmYS1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLnByb2plY3QtZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzJjMzM7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbn1cblxuLnN0YWNrLWl0ZW0ge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbjogYXV0byA0cHggYXV0byA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdmVuIFByb1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzIzMmMzMztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/project/project.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/project/project.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectComponent = class ProjectComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProjectComponent.prototype, "project", void 0);
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/project/project.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project.component.scss */ "./src/app/components/project/project.component.scss")).default]
    })
], ProjectComponent);



/***/ }),

/***/ "./src/app/components/projects/projects.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".projects-content {\n  max-width: 1440px;\n  height: 500px;\n  margin: 0;\n  border-radius: 0;\n  font-family: \"Play\", sans-serif;\n}\n\n.project-list,\n.project-list-viewport {\n  height: 100%;\n  width: 100%;\n}\n\n.project-list .project-list-viewport .cdk-virtual-scroll-content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hud2F5b2RpL3Byb2plY3RzL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0RGOztBRElBOztFQUVFLFlBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvZ2xvYmFscy5zY3NzJztcblxuLnByb2plY3RzLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LWZhbWlseTogJ1BsYXknLCBzYW5zLXNlcmlmO1xufVxuXG4ucHJvamVjdC1saXN0LFxuLnByb2plY3QtbGlzdC12aWV3cG9ydCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9qZWN0LWxpc3QgLnByb2plY3QtbGlzdC12aWV3cG9ydCAuY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRlbnQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4iLCIucHJvamVjdHMtY29udGVudCB7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnByb2plY3QtbGlzdCxcbi5wcm9qZWN0LWxpc3Qtdmlld3BvcnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvamVjdC1saXN0IC5wcm9qZWN0LWxpc3Qtdmlld3BvcnQgLmNkay12aXJ0dWFsLXNjcm9sbC1jb250ZW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portfolio */ "./src/app/portfolio.ts");



let ProjectsComponent = class ProjectsComponent {
    constructor() { }
    ngOnInit() {
        this.projects = src_app_portfolio__WEBPACK_IMPORTED_MODULE_2__["portfolio"].projects;
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/components/projects/projects.component.scss")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/components/skill-item/skill-item.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/skill-item/skill-item.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  height: 48px;\n  width: 48px;\n  border-radius: 4px;\n  margin: 4px 0 4px 0;\n}\n@media only screen and (max-width: 575px) {\n  .content {\n    margin: 4px 0 4px 0;\n  }\n}\n@media only screen and (min-width: 576px) and (max-width: 1023px) {\n  .content {\n    margin: 2px 4px 2px 4px;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .content {\n    margin: 4px 8px 4px 8px;\n  }\n}\n.skill-content {\n  font-family: \"Maven Pro\", sans-serif;\n  text-align: center;\n  font-size: 12px;\n  line-height: 3px;\n  width: 100%;\n}\n.skill-image {\n  height: 30px;\n  width: 100%;\n  font-size: 30px;\n  text-align: center;\n}\n.mat-icon {\n  -webkit-filter: saturate(150%);\n          filter: saturate(150%);\n  margin: auto;\n  height: 38px;\n  width: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hud2F5b2RpL3Byb2plY3RzL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2tpbGwtaXRlbS9za2lsbC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NraWxsLWl0ZW0vc2tpbGwtaXRlbS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9qb2hud2F5b2RpL3Byb2plY3RzL3BvcnRmb2xpby9zcmMvc3R5bGVzL2dsb2JhbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0RGO0FDQ0k7RUZKSjtJQU9JLG1CQUFBO0VDQUY7QUFDRjtBQ0FJO0VGUko7SUFXSSx1QkFBQTtFQ0NGO0FBQ0Y7QUNESTtFRlpKO0lBZUksdUJBQUE7RUNFRjtBQUNGO0FEQ0E7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0VGO0FEQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VGO0FEQ0E7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NraWxsLWl0ZW0vc2tpbGwtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9nbG9iYWxzLnNjc3MnO1xuXG4uY29udGVudCB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiA0cHggMCA0cHggMDtcblxuICBAaW5jbHVkZSByZXNwb25kLXRvKGhhbmRoZWxkcykge1xuICAgIG1hcmdpbjogNHB4IDAgNHB4IDA7XG4gIH1cblxuICBAaW5jbHVkZSByZXNwb25kLXRvKG1lZGl1bS1zY3JlZW5zKSB7XG4gICAgbWFyZ2luOiAycHggNHB4IDJweCA0cHg7XG4gIH1cblxuICBAaW5jbHVkZSByZXNwb25kLXRvKHdpZGUtc2NyZWVucykge1xuICAgIG1hcmdpbjogNHB4IDhweCA0cHggOHB4O1xuICB9XG59XG5cbi5za2lsbC1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6ICdNYXZlbiBQcm8nLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5za2lsbC1pbWFnZSB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWljb24ge1xuICBmaWx0ZXI6IHNhdHVyYXRlKDE1MCUpO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMzhweDtcbiAgd2lkdGg6IDM4cHg7XG59XG4iLCIuY29udGVudCB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiA0cHggMCA0cHggMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbjogNHB4IDAgNHB4IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbjogMnB4IDRweCAycHggNHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuY29udGVudCB7XG4gICAgbWFyZ2luOiA0cHggOHB4IDRweCA4cHg7XG4gIH1cbn1cblxuLnNraWxsLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJNYXZlbiBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2tpbGwtaW1hZ2Uge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1pY29uIHtcbiAgZmlsdGVyOiBzYXR1cmF0ZSgxNTAlKTtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiAzOHB4O1xufSIsIi8vIFJlc3BvbnNpdmVuZXNzXG4kYnJlYWstc21hbGw6IDU3NXB4O1xuJGJyZWFrLWxhcmdlOiAxMDI0cHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICBAaWYgJG1lZGlhID09IGhhbmRoZWxkcyB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbWVkaXVtLXNjcmVlbnMge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXNtYWxsICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXJnZSAtIDEpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gd2lkZS1zY3JlZW5zIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1sYXJnZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/skill-item/skill-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/skill-item/skill-item.component.ts ***!
  \***************************************************************/
/*! exports provided: SkillItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillItemComponent", function() { return SkillItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillItemComponent = class SkillItemComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SkillItemComponent.prototype, "skill", void 0);
SkillItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skill-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skill-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skill-item/skill-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skill-item.component.scss */ "./src/app/components/skill-item/skill-item.component.scss")).default]
    })
], SkillItemComponent);



/***/ }),

/***/ "./src/app/components/skills/skills.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/skills/skills.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  max-width: 1440px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  border-radius: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  font-family: \"Play\", sans-serif;\n}\n\n.skill-items {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  flex-wrap: wrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n\n@media only screen and (max-width: 575px) {\n  .skill-items {\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n  }\n}\n\n@media only screen and (min-width: 576px) and (max-width: 1023px) {\n  .skill-items {\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hud2F5b2RpL3Byb2plY3RzL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2pvaG53YXlvZGkvcHJvamVjdHMvcG9ydGZvbGlvL3NyYy9zdHlsZXMvZ2xvYmFscy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSwrQkFBQTtBQ0RGOztBRElBO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0FDREY7O0FDWEk7RUZNSjtJQVNJLHlCQUFBO1lBQUEsOEJBQUE7RUNBRjtBQUNGOztBQ1pJO0VGRUo7SUFhSSx1QkFBQTtZQUFBLDJCQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9nbG9iYWxzLnNjc3MnO1xuXG4uY29udGVudCB7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtZmFtaWx5OiAnUGxheScsIHNhbnMtc2VyaWY7XG59XG5cbi5za2lsbC1pdGVtcyB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8oaGFuZGhlbGRzKSB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgQGluY2x1ZGUgcmVzcG9uZC10byhtZWRpdW0tc2NyZWVucykge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxufVxuIiwiLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LWZhbWlseTogXCJQbGF5XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5za2lsbC1pdGVtcyB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuc2tpbGwtaXRlbXMge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAuc2tpbGwtaXRlbXMge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxufSIsIi8vIFJlc3BvbnNpdmVuZXNzXG4kYnJlYWstc21hbGw6IDU3NXB4O1xuJGJyZWFrLWxhcmdlOiAxMDI0cHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICBAaWYgJG1lZGlhID09IGhhbmRoZWxkcyB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbWVkaXVtLXNjcmVlbnMge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXNtYWxsICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXJnZSAtIDEpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gd2lkZS1zY3JlZW5zIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1sYXJnZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portfolio */ "./src/app/portfolio.ts");



let SkillsComponent = class SkillsComponent {
    ngOnInit() {
        this.skills = src_app_portfolio__WEBPACK_IMPORTED_MODULE_2__["portfolio"].skills;
    }
};
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skills/skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.scss */ "./src/app/components/skills/skills.component.scss")).default]
    })
], SkillsComponent);



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");












let SharedModule = class SharedModule {
    constructor(faIconLibrary) {
        faIconLibrary.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCog"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faBars"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faLinkedin"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faRocket"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPowerOff"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUserCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPlayCircle"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faGithub"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faMediumM"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faTwitter"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faInstagram"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faYoutube"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faAngular"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faReact"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faHtml5"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faJava"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faPython"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faDocker"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faNodeJs"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faJs"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faGitAlt"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCopyright"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faExternalLinkAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faHome"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faBriefcase"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faBurn"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUser"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUserAstronaut"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faBlog"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faChessBoard"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faIdCard"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faTelegram"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCopy"]);
    }
};
SharedModule.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconLibrary"] }
];
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        ],
    })
], SharedModule);



/***/ }),

/***/ "./src/app/portfolio.ts":
/*!******************************!*\
  !*** ./src/app/portfolio.ts ***!
  \******************************/
/*! exports provided: portfolio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portfolio", function() { return portfolio; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const portfolio = Object.freeze({
    user: {
        name: 'John Otieno Wayodi',
        title: 'Full Stack Developer',
        quote: 'Mission-driven full stack developer with a passion for thoughtful UI design, collaboration, and teaching.',
        email: 'wayodijohn@gmail.com',
        linkedin: 'https://www.linkedin.com/in/john-wayodi/',
        twitter: 'https://twitter.com/wayodijohn',
        github: 'https://github.com/johnwayodi',
    },
    about: {
        description: `I’ve always sought out opportunities and challenges that are meaningful to me.
      Although my professional path has taken many twists and turns — from touring and recording artist,
      to employee of the year at a non-profit, to dean's scholar at UPenn, to small business owner and entrepreneur —
      I've never stopped engaging my passion to help others and solve problems.
      As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world.
      That's why I’m excited to make a big impact at a high growth company.`,
    },
    contacts: [
        {
            title: 'linkedin',
            urlLink: 'https://www.linkedin.com/in/john-wayodi/',
            username: 'John Wayodi',
        },
        {
            title: 'twitter',
            urlLink: 'https://twitter.com/wayodijohn',
            username: '@wayodijohn',
        },
        {
            title: 'telegram',
            urlLink: 'https://t.me/@wayodijohn',
            username: 'johnwayodi',
        },
    ],
    experience: [
        {
            title: 'Frontend Engineer',
            companyName: 'Aerotage',
            companyLink: 'https://www.aerotage.com',
            employmentType: '(Remote/Contract)',
            duration: '6 months',
            startDate: 'Oct 2019',
            endDate: 'Mar 2020',
            currentJob: false,
            summary: 'Aerotage is a company focused on in aerospace staffing, engineering and recruiting services based in the US. I work as a fully remote Frontend developer on a team of 10 mainly using React/Typescript to perform the following.',
            highlights: [
                'Develop and maintain a UI library.',
                'Develop and maintain Web Applications that use components from the UI Library.',
            ],
        },
        {
            title: 'Full Stack Developer',
            companyName: 'Andela',
            companyLink: 'https://andela.com',
            employmentType: '(Full Time)',
            duration: '11 months',
            startDate: 'Dec 2018',
            endDate: 'Oct 2019',
            currentJob: false,
            summary: `Andela is a company focusing on recruiting and placing developers on partner work.
          I joined the organization as a Full Stack Developer, building systems for partners where I was placed using NodeJs, React and Angular.
          Also served other responsibilities within internal projects:`,
            highlights: [
                'Mentor junior developers withing teams.',
                'Acted as Technical Coordinator, reviewing, merging PRs and ensuring high standards within pro jects.',
            ],
        },
    ],
    projects: [
        {
            title: 'Store Manager API',
            description: 'Backend Server for the Store Manager Web Application',
            projectUrl: 'https://jw-store-manager-apiv2.herokuapp.com/apidocs/',
            repoUrl: 'https://github.com/johnwayodi/sm-api-v2/',
            highlights: [
                'Api implementation using Flask',
                'Backend authentication passport jwt.',
            ],
            stack: ['Python', 'Flask'],
            imagePath: '../../../assets/images/storemanagerbe.png',
        },
        {
            title: 'Store Manager Frontend',
            description: 'Web application for the Store Manager',
            projectUrl: 'https://johnwayodi.github.io/store-manager/',
            repoUrl: 'https://github.com/johnwayodi/sm-frontend-lms/',
            highlights: [
                'Design and implement components in React',
                'Handle state management using Redux',
            ],
            stack: ['React', 'Redux', 'JavaScript'],
            imagePath: '../../../assets/images/storemanagerfe.png',
        },
    ],
    skills: [
        {
            language: 'javaScript',
            level: 90,
            iconName: 'js',
            asset: false,
        },
        {
            language: 'typeScript',
            level: 90,
            iconName: '',
            asset: true,
        },
        {
            language: 'node.js',
            level: 80,
            iconName: 'node-js',
            asset: false,
        },
        {
            language: 'react',
            level: 90,
            iconName: 'react',
            asset: false,
        },
        {
            language: 'angular',
            level: 100,
            iconName: 'angular',
            asset: false,
        },
        {
            language: 'java',
            level: 90,
            iconName: 'java',
            asset: false,
        },
        {
            language: 'python',
            level: 90,
            iconName: 'python',
            asset: false,
        },
        {
            language: 'nestJs',
            level: 60,
            iconName: '',
            asset: true,
        },
        {
            language: 'redux',
            level: 90,
            iconName: '',
            asset: true,
        },
        {
            language: 'golang',
            level: 30,
            iconName: '',
            asset: true,
        },
        {
            language: 'docker',
            level: 50,
            iconName: 'docker',
            asset: false,
        },
        {
            language: 'android',
            level: 80,
            iconName: '',
            asset: true,
        },
        {
            language: 'git',
            level: 100,
            iconName: 'git-alt',
            asset: false,
        },
    ],
});


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/johnwayodi/projects/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map