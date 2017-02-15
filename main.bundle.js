webpackJsonp([1,4],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(451);
/* harmony export (immutable) */ __webpack_exports__["a"] = Component;

function Component(metadata) {
    if (metadata === void 0) { metadata = {}; }
    return function (cls) {
        return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* MagicDecoratorUtils */].annotateComponent(cls, metadata);
    };
}
//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/magic.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decorators_magic_component__ = __webpack_require__(123);
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
    function RunaComponent() {
        this.number = '23432534534';
        this.text = 'Ide jönnek a Grabovoj számok';
    }
    RunaComponent.prototype.ngOnInit = function () { };
    return RunaComponent;
}());
RunaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__decorators_magic_component__["a" /* Component */])({
        selector: 'app-runa',
        template: __webpack_require__(613),
        styles: [__webpack_require__(609)]
    }),
    __metadata("design:paramtypes", [])
], RunaComponent);

//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/runa.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 336;


/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(446);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/main.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app_component__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_runa_runa_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_number_number_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_text_text_component__ = __webpack_require__(450);
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
            __WEBPACK_IMPORTED_MODULE_4__components_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_runa_runa_component__["a" /* RunaComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_number_number_component__["a" /* NumberComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_text_text_component__["a" /* TextComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            routerModule
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__components_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/app.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_runa_runa_component__ = __webpack_require__(282);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });

var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__components_runa_runa_component__["a" /* RunaComponent */]
    }
];
//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/app.routes.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decorators_magic_component__ = __webpack_require__(123);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__decorators_magic_component__["a" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(611),
        styles: [__webpack_require__(607)]
    })
], AppComponent);

//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/app.component.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decorators_magic_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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


// TODO nativescript animation currently does not support the changing of the color to the text. find something else.
var NumberComponent = (function () {
    function NumberComponent() {
    }
    NumberComponent.prototype.ngOnInit = function () {
        this.chars = this.number.trim().split('');
    };
    return NumberComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Input */])(),
    __metadata("design:type", String)
], NumberComponent.prototype, "number", void 0);
NumberComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__decorators_magic_component__["a" /* Component */])({
        selector: 'app-number',
        template: __webpack_require__(612),
        styles: [__webpack_require__(608)]
    }),
    __metadata("design:paramtypes", [])
], NumberComponent);

//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/number.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decorators_magic_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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
        this.fontSize = "5vw";
    }
    TextComponent.prototype.ngOnInit = function () {
    };
    return TextComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Input */])(),
    __metadata("design:type", String)
], TextComponent.prototype, "text", void 0);
TextComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__decorators_magic_component__["a" /* Component */])({
        selector: 'app-text',
        template: __webpack_require__(614),
        styles: [__webpack_require__(610)]
    }),
    __metadata("design:paramtypes", [])
], TextComponent);

//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/text.component.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_magic_service__ = __webpack_require__(452);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagicDecoratorUtils; });
// angular

// app

var _reflect = Reflect;
var MagicDecoratorUtils = (function () {
    function MagicDecoratorUtils() {
    }
    MagicDecoratorUtils.getMetadata = function (metadata, customDecoratorMetadata) {
        if (metadata === void 0) { metadata = {}; }
        if (metadata.templateUrl) {
            // correct view for platform target
            metadata.templateUrl = __WEBPACK_IMPORTED_MODULE_1__services_magic_service__["a" /* MagicService */].TEMPLATE_URL(metadata.templateUrl, !!metadata.platformSpecific);
        }
        if (metadata.styleUrls) {
            // correct style for platform target
            metadata.styleUrls = __WEBPACK_IMPORTED_MODULE_1__services_magic_service__["a" /* MagicService */].STYLE_URLS(metadata.styleUrls);
        }
        return metadata;
    };
    MagicDecoratorUtils.annotateComponent = function (cls, metadata, customDecoratorMetadata) {
        if (metadata === void 0) { metadata = {}; }
        var annotations = _reflect.getMetadata('annotations', cls) || [];
        annotations.push(new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */](MagicDecoratorUtils.getMetadata(metadata, customDecoratorMetadata)));
        _reflect.defineMetadata('annotations', annotations, cls);
        return cls;
    };
    return MagicDecoratorUtils;
}());

//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/utils.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagicService; });
var MagicService = (function () {
    function MagicService() {
    }
    MagicService.TEMPLATE_URL = function (path, platformSpecific) {
        if (MagicService.IS_NATIVESCRIPT()) {
            var paths = path.split('.');
            paths.splice(-1);
            var platform = platformSpecific ? (MagicService.IS_ANDROID() ? 'android' : 'ios') : 'tns';
            return paths.join('.') + "." + platform + ".html";
        }
        else {
            return path;
        }
    };
    MagicService.STYLE_URLS = function (paths, platformSpecific) {
        if (MagicService.IS_NATIVESCRIPT()) {
            return paths.map(function (path) {
                var parts = path.split('.');
                parts.splice(-1);
                var platform = platformSpecific ? (MagicService.IS_ANDROID() ? 'android' : 'ios') : 'tns';
                return parts.join('.') + "." + platform + ".css";
            });
        }
        else {
            return paths;
        }
    };
    MagicService.IS_NATIVESCRIPT = function () {
        return (MagicService.IS_IOS() || MagicService.IS_ANDROID());
    };
    MagicService.IS_IOS = function () {
        return (typeof NSObject !== 'undefined' && typeof NSString !== 'undefined');
    };
    MagicService.IS_ANDROID = function () {
        return (typeof android !== 'undefined' && typeof java !== 'undefined');
    };
    return MagicService;
}());

//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/magic.service.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/home/travis/build/nadapapa/gombrunapp/src/environment.prod.js.map

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

module.exports = "#number {\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack:center;\n        -ms-flex-pack:center;\n            justify-content:center;\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    font-size: 8vmin;\n}\n\n/*\n Rainbow color text animation\n http://codepen.io/joashp/pen/dYXNwj\n*/\n.color-text-flow span,\n.color-text-flow-hover:hover span {\n    -webkit-animation-name: color-text-flow-keys;\n    animation-name: color-text-flow-keys;\n    -webkit-animation-duration: 10s;\n    animation-duration: 10s;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    -webkit-animation-direction: alternate;\n    animation-direction: alternate;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n}\n@-webkit-keyframes color-text-flow-keys {\n    0% {\n        color: #d65c97;\n    }\n    5% {\n        color: #5cd666;\n    }\n    10% {\n        color: #a55cd6;\n    }\n    15.0% {\n        color: #5c7cd6;\n    }\n    20% {\n        color: #d65c7a;\n    }\n    25% {\n        color: #81d65c;\n    }\n    30.0% {\n        color: #835cd6;\n    }\n    35% {\n        color: #685cd6;\n    }\n    40% {\n        color: #5c9dd6;\n    }\n    45% {\n        color: #5cd670;\n    }\n    50% {\n        color: #d6625c;\n    }\n    55.0% {\n        color: #d6835c;\n    }\n    60.0% {\n        color: #d6605c;\n    }\n    65% {\n        color: #be5cd6;\n    }\n    70% {\n        color: #5c8dd6;\n    }\n    75% {\n        color: #95d65c;\n    }\n    80% {\n        color: #d69d5c;\n    }\n    85.0% {\n        color: #d65c81;\n    }\n    90% {\n        color: #5cd666;\n    }\n    95% {\n        color: #d67e5c;\n    }\n    100% {\n        color: #64d65c;\n    }\n}\n@keyframes color-text-flow-keys {\n    0% {\n        color: #d65c97;\n    }\n    5% {\n        color: #5cd666;\n    }\n    10% {\n        color: #a55cd6;\n    }\n    15.0% {\n        color: #5c7cd6;\n    }\n    20% {\n        color: #d65c7a;\n    }\n    25% {\n        color: #81d65c;\n    }\n    30.0% {\n        color: #835cd6;\n    }\n    35% {\n        color: #685cd6;\n    }\n    40% {\n        color: #5c9dd6;\n    }\n    45% {\n        color: #5cd670;\n    }\n    50% {\n        color: #d6625c;\n    }\n    55.0% {\n        color: #d6835c;\n    }\n    60.0% {\n        color: #d6605c;\n    }\n    65% {\n        color: #be5cd6;\n    }\n    70% {\n        color: #5c8dd6;\n    }\n    75% {\n        color: #95d65c;\n    }\n    80% {\n        color: #d69d5c;\n    }\n    85.0% {\n        color: #d65c81;\n    }\n    90% {\n        color: #5cd666;\n    }\n    95% {\n        color: #d67e5c;\n    }\n    100% {\n        color: #64d65c;\n    }\n}\n.color-text-flow span:nth-of-type(1),\n.color-text-flow-hover:hover span:nth-of-type(1) {\n    -webkit-animation-delay: -19.8s;\n    animation-delay: -19.8s;\n}\n.color-text-flow span:nth-of-type(2),\n.color-text-flow-hover:hover span:nth-of-type(2) {\n    -webkit-animation-delay: -19.6s;\n    animation-delay: -19.6s;\n}\n.color-text-flow span:nth-of-type(3),\n.color-text-flow-hover:hover span:nth-of-type(3) {\n    -webkit-animation-delay: -19.4s;\n    animation-delay: -19.4s;\n}\n.color-text-flow span:nth-of-type(4),\n.color-text-flow-hover:hover span:nth-of-type(4) {\n    -webkit-animation-delay: -19.2s;\n    animation-delay: -19.2s;\n}\n.color-text-flow span:nth-of-type(5),\n.color-text-flow-hover:hover span:nth-of-type(5) {\n    -webkit-animation-delay: -19s;\n    animation-delay: -19s;\n}\n.color-text-flow span:nth-of-type(6),\n.color-text-flow-hover:hover span:nth-of-type(6) {\n    -webkit-animation-delay: -18.8s;\n    animation-delay: -18.8s;\n}\n.color-text-flow span:nth-of-type(7),\n.color-text-flow-hover:hover span:nth-of-type(7) {\n    -webkit-animation-delay: -18.6s;\n    animation-delay: -18.6s;\n}\n.color-text-flow span:nth-of-type(8),\n.color-text-flow-hover:hover span:nth-of-type(8) {\n    -webkit-animation-delay: -18.4s;\n    animation-delay: -18.4s;\n}\n.color-text-flow span:nth-of-type(9),\n.color-text-flow-hover:hover span:nth-of-type(9) {\n    -webkit-animation-delay: -18.2s;\n    animation-delay: -18.2s;\n}\n.color-text-flow span:nth-of-type(10),\n.color-text-flow-hover:hover span:nth-of-type(10) {\n    -webkit-animation-delay: -18s;\n    animation-delay: -18s;\n}\n.color-text-flow span:nth-of-type(11),\n.color-text-flow-hover:hover span:nth-of-type(11) {\n    -webkit-animation-delay: -17.8s;\n    animation-delay: -17.8s;\n}"

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

module.exports = "#gombruna {\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack:center;\n        -ms-flex-pack:center;\n            justify-content:center;\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    background: url(\"/assets/gombruna.gif\") no-repeat center center;\n    background-size: 80vmin 80vmin;\n    height: 80vh;\n}\n\n"

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "#texts {\n    height: 0%;\n    width: 100%;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack:center;\n        -ms-flex-pack:center;\n            justify-content:center;\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    color: #FFF;\n    font-family: Helvetica, Arial, sans-serif;\n    padding: 14pt;\n}"

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = "<span class=\"text color-text-flow\" id=\"number\">\n  <span *ngFor=\"let item of chars\">{{item}}</span>\n</span>"

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = "<div id=\"gombruna\">\n  <app-number [number]=\"number\"></app-number>\n</div>\n<app-text [text]=\"text\"></app-text>\n"

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = "<div id=\"texts\" [ngStyle]=\"{'font-size': fontSize}\"><span>{{text}}</span></div>\n"

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(337);


/***/ })

},[631]);
//# sourceMappingURL=main.bundle.map