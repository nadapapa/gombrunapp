webpackJsonp([1,4],{

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_storage_service__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_random_grabovoj_service__ = __webpack_require__(516);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RunaComponent = (function () {
    function RunaComponent(FileStorageService, RandomService) {
        this.FileStorageService = FileStorageService;
        this.RandomService = RandomService;
        this.grabovoj = { number: '', text: '' };
        this.filePath = 'assets/texts.json';
        this.interval = 5000;
    }
    RunaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.FileStorageService.setUrl(this.filePath);
        this.RandomService.getRandomGrabovojInterval(this.FileStorageService, this.interval)
            .subscribe(function (grabovoj) { return _this.grabovoj = grabovoj; });
    };
    return RunaComponent;
}());
RunaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-runa',
        template: __webpack_require__(677),
        styles: [__webpack_require__(673)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_file_storage_service__["a" /* FileStorageService */], __WEBPACK_IMPORTED_MODULE_2__services_random_grabovoj_service__["a" /* RandomGrabovojService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_file_storage_service__["a" /* FileStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_file_storage_service__["a" /* FileStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_random_grabovoj_service__["a" /* RandomGrabovojService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_random_grabovoj_service__["a" /* RandomGrabovojService */]) === "function" && _b || Object])
], RunaComponent);

var _a, _b;
//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/runa.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 397;


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(510);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/main.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_runa_runa_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_number_number_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_text_text_component__ = __webpack_require__(514);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routerModule = __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* routes */]);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__components_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_runa_runa_component__["a" /* RunaComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_number_number_component__["a" /* NumberComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_text_text_component__["a" /* TextComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            routerModule
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__components_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/app.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_runa_runa_component__ = __webpack_require__(327);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });

var routes = [
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_0__components_runa_runa_component__["a" /* RunaComponent */]
    }
];
//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/app.routes.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(675),
        styles: [__webpack_require__(671)]
    })
], AppComponent);

//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/app.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumberComponent = (function () {
    function NumberComponent() {
    }
    NumberComponent.prototype.ngOnChanges = function () {
        this.chars = this.convertStringToArray(this.number);
    };
    NumberComponent.prototype.convertStringToArray = function (string) {
        return string.trim().split('');
    };
    return NumberComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(),
    __metadata("design:type", String)
], NumberComponent.prototype, "number", void 0);
NumberComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-number',
        template: __webpack_require__(676),
        styles: [__webpack_require__(672)]
    })
], NumberComponent);

//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/number.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextComponent = (function () {
    function TextComponent() {
    }
    TextComponent.prototype.ngOnInit = function () {
    };
    return TextComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(),
    __metadata("design:type", String)
], TextComponent.prototype, "text", void 0);
TextComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-text',
        template: __webpack_require__(678),
        styles: [__webpack_require__(674)]
    }),
    __metadata("design:paramtypes", [])
], TextComponent);

//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/text.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileStorageService = (function () {
    function FileStorageService(http) {
        this.http = http;
    }
    FileStorageService.prototype.getAll = function () {
        return this.getLocalJson(this.url);
    };
    FileStorageService.prototype.setUrl = function (url) {
        this.url = url;
    };
    FileStorageService.prototype.get = function (key) { };
    FileStorageService.prototype.set = function (key, value) { };
    FileStorageService.prototype.getLocalJson = function (path) {
        return this.http.get(path);
    };
    return FileStorageService;
}());
FileStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FileStorageService);

var _a;
//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/file-storage.service.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomGrabovojService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RandomGrabovojService = (function () {
    function RandomGrabovojService() {
    }
    RandomGrabovojService.prototype.getRandomGrabovojInterval = function (storage, interval) {
        var _this = this;
        return storage.getAll()
            .map(function (data) {
            _this.data = data.json();
            _this.keys = Object.keys(_this.data);
        })
            .flatMap(function (res) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"]
                .interval(interval)
                .map(function (x) { return _this.getGrabovojFromData(); })
                .share()
                .startWith(_this.getGrabovojFromData());
        });
    };
    RandomGrabovojService.prototype.getGrabovojFromData = function () {
        var number = this.getRandomNumberFromData();
        var text = this.data[number];
        var model = {
            number: number,
            text: text
        };
        return model;
    };
    RandomGrabovojService.prototype.getRandomNumberFromData = function () {
        return this.keys[this.keys.length * Math.random() << 0];
    };
    return RandomGrabovojService;
}());
RandomGrabovojService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])()
], RandomGrabovojService);

//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/random-grabovoj.service.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/environment.prod.js.map

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "#number {\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack:center;\n        -ms-flex-pack:center;\n            justify-content:center;\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    font-size: 8vmin;\n}\n\n/*\n Rainbow color text animation\n http://codepen.io/joashp/pen/dYXNwj\n*/\n.color-text-flow span,\n.color-text-flow-hover:hover span {\n    -webkit-animation-name: color-text-flow-keys;\n    animation-name: color-text-flow-keys;\n    -webkit-animation-duration: 10s;\n    animation-duration: 10s;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    -webkit-animation-direction: alternate;\n    animation-direction: alternate;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n}\n@-webkit-keyframes color-text-flow-keys {\n    0% {\n        color: #d65c97;\n    }\n    5% {\n        color: #5cd666;\n    }\n    10% {\n        color: #a55cd6;\n    }\n    15.0% {\n        color: #5c7cd6;\n    }\n    20% {\n        color: #d65c7a;\n    }\n    25% {\n        color: #81d65c;\n    }\n    30.0% {\n        color: #835cd6;\n    }\n    35% {\n        color: #685cd6;\n    }\n    40% {\n        color: #5c9dd6;\n    }\n    45% {\n        color: #5cd670;\n    }\n    50% {\n        color: #d6625c;\n    }\n    55.0% {\n        color: #d6835c;\n    }\n    60.0% {\n        color: #d6605c;\n    }\n    65% {\n        color: #be5cd6;\n    }\n    70% {\n        color: #5c8dd6;\n    }\n    75% {\n        color: #95d65c;\n    }\n    80% {\n        color: #d69d5c;\n    }\n    85.0% {\n        color: #d65c81;\n    }\n    90% {\n        color: #5cd666;\n    }\n    95% {\n        color: #d67e5c;\n    }\n    100% {\n        color: #64d65c;\n    }\n}\n@keyframes color-text-flow-keys {\n    0% {\n        color: #d65c97;\n    }\n    5% {\n        color: #5cd666;\n    }\n    10% {\n        color: #a55cd6;\n    }\n    15.0% {\n        color: #5c7cd6;\n    }\n    20% {\n        color: #d65c7a;\n    }\n    25% {\n        color: #81d65c;\n    }\n    30.0% {\n        color: #835cd6;\n    }\n    35% {\n        color: #685cd6;\n    }\n    40% {\n        color: #5c9dd6;\n    }\n    45% {\n        color: #5cd670;\n    }\n    50% {\n        color: #d6625c;\n    }\n    55.0% {\n        color: #d6835c;\n    }\n    60.0% {\n        color: #d6605c;\n    }\n    65% {\n        color: #be5cd6;\n    }\n    70% {\n        color: #5c8dd6;\n    }\n    75% {\n        color: #95d65c;\n    }\n    80% {\n        color: #d69d5c;\n    }\n    85.0% {\n        color: #d65c81;\n    }\n    90% {\n        color: #5cd666;\n    }\n    95% {\n        color: #d67e5c;\n    }\n    100% {\n        color: #64d65c;\n    }\n}\n.color-text-flow span:nth-of-type(1),\n.color-text-flow-hover:hover span:nth-of-type(1) {\n    -webkit-animation-delay: -19.8s;\n    animation-delay: -19.8s;\n}\n.color-text-flow span:nth-of-type(2),\n.color-text-flow-hover:hover span:nth-of-type(2) {\n    -webkit-animation-delay: -19.6s;\n    animation-delay: -19.6s;\n}\n.color-text-flow span:nth-of-type(3),\n.color-text-flow-hover:hover span:nth-of-type(3) {\n    -webkit-animation-delay: -19.4s;\n    animation-delay: -19.4s;\n}\n.color-text-flow span:nth-of-type(4),\n.color-text-flow-hover:hover span:nth-of-type(4) {\n    -webkit-animation-delay: -19.2s;\n    animation-delay: -19.2s;\n}\n.color-text-flow span:nth-of-type(5),\n.color-text-flow-hover:hover span:nth-of-type(5) {\n    -webkit-animation-delay: -19s;\n    animation-delay: -19s;\n}\n.color-text-flow span:nth-of-type(6),\n.color-text-flow-hover:hover span:nth-of-type(6) {\n    -webkit-animation-delay: -18.8s;\n    animation-delay: -18.8s;\n}\n.color-text-flow span:nth-of-type(7),\n.color-text-flow-hover:hover span:nth-of-type(7) {\n    -webkit-animation-delay: -18.6s;\n    animation-delay: -18.6s;\n}\n.color-text-flow span:nth-of-type(8),\n.color-text-flow-hover:hover span:nth-of-type(8) {\n    -webkit-animation-delay: -18.4s;\n    animation-delay: -18.4s;\n}\n.color-text-flow span:nth-of-type(9),\n.color-text-flow-hover:hover span:nth-of-type(9) {\n    -webkit-animation-delay: -18.2s;\n    animation-delay: -18.2s;\n}\n.color-text-flow span:nth-of-type(10),\n.color-text-flow-hover:hover span:nth-of-type(10) {\n    -webkit-animation-delay: -18s;\n    animation-delay: -18s;\n}\n.color-text-flow span:nth-of-type(11),\n.color-text-flow-hover:hover span:nth-of-type(11) {\n    -webkit-animation-delay: -17.8s;\n    animation-delay: -17.8s;\n}"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "#gombruna {\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack:center;\n        -ms-flex-pack:center;\n            justify-content:center;\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    background: url(\"assets/gombruna.gif\") no-repeat center center;\n    background-size: 80vmin 80vmin;\n    height: 80vh;\n}\n\n"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "#texts {\n    height: 0%;\n    width: 100%;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack:center;\n        -ms-flex-pack:center;\n            justify-content:center;\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    color: #FFF;\n    font-family: Helvetica, Arial, sans-serif;\n    padding: 14pt;\n}"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<span class=\"text color-text-flow\" id=\"number\">\n  <span *ngFor=\"let item of chars\">{{item}}</span>\n</span>"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<div id=\"gombruna\">\n  <app-number [number]=\"grabovoj.number\"></app-number>\n</div>\n<app-text [text]=\"grabovoj.text\"></app-text>\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<div id=\"texts\" [ngStyle]=\"{'font-size': fontSize}\"><span>{{text}}</span></div>\n"

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(398);


/***/ })

},[942]);
//# sourceMappingURL=main.bundle.map