(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");




var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .bg{\n  background-color: #9763;\n} */\n.modal-footer{\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSDtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmJne1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc2Mztcbn0gKi9cbi5tb2RhbC1mb290ZXJ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar sticky-top  navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\"  routerLink='/home' routerLinkActive='active'><i class=\"fab fa-github\">Github Search</i></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink='/home' routerLinkActive='active'>Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item dropdown\">\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <a  routerLink='/github' routerLinkActive='active'><button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button></a>\n    </form>\n  </div>\n</nav>\n<!-- <app-user-welcome></app-user-welcome> -->\n\n\n<!-- <div class=\"container\">\n      <app-github></app-github>\n\n</div> -->\n\n<router-outlet></router-outlet>\n<ng-progress class=\"bg-danger\"></ng-progress>\n<div class=\"card modal-footer bg-dark\">\n  Copyright (c) 2019 Copyright KIpkemoi collins All Rights Reserved.\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { SearchService } from "./git-search/search.service";
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Github-search';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-progressbar/http */ "./node_modules/@ngx-progressbar/http/fesm5/ngx-progressbar-http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _github_github_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./github/github.component */ "./src/app/github/github.component.ts");
/* harmony import */ var _git_search_search_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./git-search/search.service */ "./src/app/git-search/search.service.ts");
/* harmony import */ var _user_welcome_user_welcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-welcome/user-welcome.component */ "./src/app/user-welcome/user-welcome.component.ts");
/* harmony import */ var _bg_color_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bg-color.directive */ "./src/app/bg-color.directive.ts");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error404/error404.component */ "./src/app/error404/error404.component.ts");
/* harmony import */ var _date_count_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./date-count.pipe */ "./src/app/date-count.pipe.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _github_github_component__WEBPACK_IMPORTED_MODULE_9__["GithubComponent"],
                _user_welcome_user_welcome_component__WEBPACK_IMPORTED_MODULE_11__["UserWelcomeComponent"],
                _bg_color_directive__WEBPACK_IMPORTED_MODULE_12__["BgColorDirective"],
                _error404_error404_component__WEBPACK_IMPORTED_MODULE_13__["Error404Component"],
                _date_count_pipe__WEBPACK_IMPORTED_MODULE_14__["DateCountPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__["NgProgressModule"],
                _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_6__["NgProgressHttpModule"]
            ],
            providers: [_git_search_search_service__WEBPACK_IMPORTED_MODULE_10__["SearchService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bg-color.directive.ts":
/*!***************************************!*\
  !*** ./src/app/bg-color.directive.ts ***!
  \***************************************/
/*! exports provided: BgColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgColorDirective", function() { return BgColorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BgColorDirective = /** @class */ (function () {
    function BgColorDirective(el) {
        this.el = el;
    }
    BgColorDirective.prototype.onMouseEnter = function () {
        this.bgColor("#8463", "blue");
    };
    BgColorDirective.prototype.onMouseLeave = function () {
        this.bgColor(null, null);
    };
    BgColorDirective.prototype.bgColor = function (color, color1) {
        this.el.nativeElement.style.backgroundColor = color;
        this.el.nativeElement.style.color = color1;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseenter"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BgColorDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BgColorDirective.prototype, "onMouseLeave", null);
    BgColorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appBgColor]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], BgColorDirective);
    return BgColorDirective;
}());



/***/ }),

/***/ "./src/app/date-count.pipe.ts":
/*!************************************!*\
  !*** ./src/app/date-count.pipe.ts ***!
  \************************************/
/*! exports provided: DateCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCountPipe", function() { return DateCountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateCountPipe = /** @class */ (function () {
    function DateCountPipe() {
    }
    DateCountPipe.prototype.transform = function (value) {
        var today = new Date();
        var todayWithNotime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(value - todayWithNotime);
        var daysInSeconds = 86400;
        var dateDifferentSeconds = dateDifference * 0.001;
        var dateCounter = dateDifferentSeconds / daysInSeconds;
        if (dateCounter >= 1 && value > todayWithNotime) {
            return 0;
        }
        else {
            return dateCounter;
        }
    };
    DateCountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dateCount'
        })
    ], DateCountPipe);
    return DateCountPipe;
}());



/***/ }),

/***/ "./src/app/error404/error404.component.css":
/*!*************************************************!*\
  !*** ./src/app/error404/error404.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-md-7{\n  height: 82vh;\n}\n.container{\n  background-color: #8574;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3I0MDQvZXJyb3I0MDQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZXJyb3I0MDQvZXJyb3I0MDQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtN3tcbiAgaGVpZ2h0OiA4MnZoO1xufVxuLmNvbnRhaW5lcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg1NzQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/error404/error404.component.html":
/*!**************************************************!*\
  !*** ./src/app/error404/error404.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <button (click)=goBack() class=\"btn btn-warning\" type=\"button\" name=\"button\">Go back Home</button>\n\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"card bg-danger \">\n        <h1> <i class=\"far fa-question-circle\"></i> Page not found</h1>\n        <h3>The page you are requesting doest not exist </h3>\n        <div class=\"jumbotron\">\n          <h1>404 This is not the page you are looking for</h1>\n          <h1><i class=\"fas fa-exclamation\"></i><i class=\"fab fa-github-alt\"></i>Gitsearch</h1>\n\n        </div>\n      </div>\n\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/error404/error404.component.ts":
/*!************************************************!*\
  !*** ./src/app/error404/error404.component.ts ***!
  \************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var Error404Component = /** @class */ (function () {
    function Error404Component(router) {
        this.router = router;
    }
    Error404Component.prototype.goBack = function () {
        this.router.navigate(["/home"]);
    };
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error404',
            template: __webpack_require__(/*! ./error404.component.html */ "./src/app/error404/error404.component.html"),
            styles: [__webpack_require__(/*! ./error404.component.css */ "./src/app/error404/error404.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/git-search/search.service.ts":
/*!**********************************************!*\
  !*** ./src/app/git-search/search.service.ts ***!
  \**********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    SearchService.prototype.gitSearch = function () {
    };
    SearchService.prototype.getRepos = function (userName) {
        return this.http.get(this.baseUrl + "/users/" + userName + "/repos");
    };
    SearchService.prototype.getUsers = function (userName) {
        return this.http.get(this.baseUrl + "/users/" + userName);
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/github/github.component.css":
/*!*********************************************!*\
  !*** ./src/app/github/github.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n  height: 250px;\n  width: auto;\n}\n.mar{\n  margin: 5px;\n  height:auto;\n\n}\n.mar:hover{\n  background-color: #2142;\n  transition: 450ms;\n}\n.marg{\n  margin: 3px;\n  height: 200px;\n}\na{\n  font-weight: 400;\n}\na:hover{\n  text-decoration: underline;\n  color: #567;\n\n}\n.search1{\n  display: inline-flex;\n  flex: 1 1 300px;\n  position: relative;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.fa-searchengin{\n  padding: 0.7rem;\n}\n.search{\n  flex: 1;\n  border: 0;\n  padding: 0.5rem 0.5rem 0.5rem 0;\n}\n#btn{\n  background: #538AC5;\n border: 0;\n color: white;\n padding: 0.5rem;\n border-radius: 0;\n}\n.container-fluid{\n  background-color: #2442;\n}\n.card{\n  background-color: #2441;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0aHViL2dpdGh1Yi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7O0FBRWI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLFdBQVc7O0FBRWI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsU0FBUztFQUNULCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsbUJBQW1CO0NBQ3BCLFNBQVM7Q0FDVCxZQUFZO0NBQ1osZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9naXRodWIvZ2l0aHViLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuLm1hcntcbiAgbWFyZ2luOiA1cHg7XG4gIGhlaWdodDphdXRvO1xuXG59XG4ubWFyOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0MjtcbiAgdHJhbnNpdGlvbjogNDUwbXM7XG59XG4ubWFyZ3tcbiAgbWFyZ2luOiAzcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5he1xuICBmb250LXdlaWdodDogNDAwO1xufVxuYTpob3ZlcntcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjNTY3O1xuXG59XG4uc2VhcmNoMXtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXg6IDEgMSAzMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZmEtc2VhcmNoZW5naW57XG4gIHBhZGRpbmc6IDAuN3JlbTtcbn1cbi5zZWFyY2h7XG4gIGZsZXg6IDE7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwLjVyZW0gMDtcbn1cbiNidG57XG4gIGJhY2tncm91bmQ6ICM1MzhBQzU7XG4gYm9yZGVyOiAwO1xuIGNvbG9yOiB3aGl0ZTtcbiBwYWRkaW5nOiAwLjVyZW07XG4gYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jb250YWluZXItZmx1aWR7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDQyO1xufVxuLmNhcmR7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDQxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/github/github.component.html":
/*!**********************************************!*\
  !*** ./src/app/github/github.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<div class=\"row\">\n\n\n<div class=\"col-md-4\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <label for=\"\">Search User</label>\n      <div class=\"search1\">\n        <i class=\"fab fa-searchengin\"></i>\n        <input (keyup)='getUsers($event)' class=\"form-control search\" placeholder=\"Search ...\" type=\"search\" name=\"userName\" [(ngModel)]=\"userName\" value=\"\">\n        <button id=\"btn\"  (click)=getRepos() (click)=getUsers(user) class=\"btn btn-primary\" type=\"button\" name=\"button\">Search</button>\n\n      </div>\n\n      <!-- <button  (click)=getUsers() class=\"btn btn-primary\" type=\"button\" name=\"button\">Submit</button> -->\n\n    </div>\n    <div  class=\"\">\n      <img src=\"{{user.avatar_url}}\" title=\"{{user.name}}\" alt=\"\">\n      <h2>{{user.name}}</h2>\n      <p>{{user.login}}</p>\n      <p><i class=\"fab fa-megaport\"></i>: {{user.company}}</p>\n      <p><i class=\"fas fa-globe-africa\"></i>: {{user.location}}</p>\n      <p><i class=\"fas fa-biohazard\"></i>{{user.bio}}</p>\n      <a href=\"{{user.html_url}}\"><button class=\"btn btn-outline-info\" type=\"button\" name=\"button\">View on  Github</button></a>\n    </div>\n\n\n  </div>\n</div>\n\n<div class=\"col-md-8\">\n  <div *ngIf=\"loading\" class=\"form-group progress\">\n  </div>\n    <span>Repos:{{user.public_repos}}</span>\n    <hr class=\"bg-info\">\n  <div class=\"row\">\n\n\n    <div *ngFor='let repo of repos' class=\"col-md-6\">\n      <div  class=\"card mar\">\n        <div class=\"marg\">\n          <div class=\"card-title\">\n            <h5><a href=\"{{repo.html_url}}\" >{{repo.name}}</a></h5>\n          </div>\n          <div class=\"card-body\">\n            {{repo.description}} <br>\n            Date created: {{repo.created_at|date}}\n          </div>\n          <div class=\"\">\n            <span><a href=\"{{repo.languages_url}}\"></a> {{repo.language}}</span>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n    <div *ngIf='errorMessage' class=\"alert alert-warning\">\n      <strong>Warning {{errorMessage}} please Try a valid userName</strong>\n    </div>\n\n  </div>\n\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/github/github.component.ts":
/*!********************************************!*\
  !*** ./src/app/github/github.component.ts ***!
  \********************************************/
/*! exports provided: GithubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubComponent", function() { return GithubComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _git_search_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../git-search/search.service */ "./src/app/git-search/search.service.ts");




var GithubComponent = /** @class */ (function () {
    function GithubComponent(http, searchService) {
        this.http = http;
        this.searchService = searchService;
        this.userName = "";
        this.loading = false;
        this.errorMessage = "";
    }
    GithubComponent.prototype.getRepos = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.searchService.getRepos(_this.userName).toPromise().then(function (response) {
                _this.repos = response;
                resolve();
            }, function (error) {
                _this.errorMessage = "An Error Occured";
                reject(error);
            });
        });
        return promise;
    };
    GithubComponent.prototype.getUsers = function (event) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.searchService.getUsers(_this.userName).toPromise().then(function (response) {
                _this.user = response;
                resolve();
            }, function (error) {
                _this.errorMessage = "An error was encountered";
                reject(error);
            });
        });
        return promise;
    };
    GithubComponent.prototype.ngOnInit = function () {
    };
    GithubComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-github',
            template: __webpack_require__(/*! ./github.component.html */ "./src/app/github/github.component.html"),
            providers: [_git_search_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]],
            styles: [__webpack_require__(/*! ./github.component.css */ "./src/app/github/github.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _git_search_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], GithubComponent);
    return GithubComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _github_github_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../github/github.component */ "./src/app/github/github.component.ts");
/* harmony import */ var _user_welcome_user_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-welcome/user-welcome.component */ "./src/app/user-welcome/user-welcome.component.ts");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error404/error404.component */ "./src/app/error404/error404.component.ts");







var routes = [
    { path: "github", component: _github_github_component__WEBPACK_IMPORTED_MODULE_4__["GithubComponent"] },
    { path: "home", component: _user_welcome_user_welcome_component__WEBPACK_IMPORTED_MODULE_5__["UserWelcomeComponent"] },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_6__["Error404Component"] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/user-welcome/user-welcome.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-welcome/user-welcome.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbo{\n  background-image: url(\"/assets/img/git.svg\");\n  background-size: cover;\n  background-position: center;\n  height: 70vh;\n  background-attachment: fixed;\n  background-color: rgba(0,0,0,0.3);\n}\n.jumbotron{\n  background-color: rgba(0,0,0,0.3);\n}\n.jumbo h1{\n  color: white !important;\n  text-transform: capitalize;\n  font-weight: 400;\n}\n@media screen and (min-width:800px) {\n  .card{\n    margin: 10px;\n    margin-bottom: 60px;\n    margin-top: 50px;\n  }\n  .height{\n    height: 450px;\n\n  }\n\n}\n.card-body{\n  transition: 450ms;\n}\n.body{\n  background-color: rgba(255,0,0,0.1);\n}\n#anim{\n  height: 250px;\n  width: 250px;\n}\n.gif{\n\n  float: right;\n}\n#type{\n  color:white;\n  font-size: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci13ZWxjb21lL3VzZXItd2VsY29tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNENBQTRDO0VBQzVDLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7O0VBRWY7O0FBRUY7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItd2VsY29tZS91c2VyLXdlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3tcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvZ2l0LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDcwdmg7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcbn1cbi5qdW1ib3Ryb257XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcbn1cbi5qdW1ibyBoMXtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MDBweCkge1xuICAuY2FyZHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIC5oZWlnaHR7XG4gICAgaGVpZ2h0OiA0NTBweDtcblxuICB9XG5cbn1cbi5jYXJkLWJvZHl7XG4gIHRyYW5zaXRpb246IDQ1MG1zO1xufVxuLmJvZHl7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDAsMCwwLjEpO1xufVxuI2FuaW17XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbn1cbi5naWZ7XG5cbiAgZmxvYXQ6IHJpZ2h0O1xufVxuI3R5cGV7XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user-welcome/user-welcome.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-welcome/user-welcome.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n<div class=\"jumbo\">\n  <div class=\"container\">\n    <div class=\"row jumbo\">\n      <div class=\"com-md-8\">\n        <div class=\"jumbotron\">\n          <h1>welcome to Github Search</h1>\n          <div  class=\"\">\n            <span id=\"type\"></span>\n          </div>\n          <a id=\"cards\"><button class=\"btn\" type=\"button\" name=\"button\">See more</button></a>\n        </div>\n\n      </div>\n      <div class=\"col-md-4\">\n      </div>\n\n    </div>\n  </div>\n\n</div>\n<div class=\"container-fluid\">\n  <div id=\"card\" class=\"row\">\n    <div class=\"col-md-4\">\n              <!-- Card -->\n        <div class=\"card height\">\n\n          <!-- Card image -->\n          <img class=\"card-img-top\" src=\"/assets/img/search.jpg\" alt=\"Card image cap\">\n\n          <!-- Card content -->\n          <div appBgColor class=\"card-body\">\n\n            <!-- Title -->\n            <h4 class=\"card-title\"><a>Unlimited Search Request</a></h4>\n            <!-- Text -->\n            <p class=\"card-text\">You are at the right place Github search Lets you search any person that their information is available at github</p>\n            <!-- Button -->\n\n\n          </div>\n\n\n        </div>\n        <!-- Card -->\n    </div>\n    <div class=\"col-md-4\">\n              <!-- Card -->\n        <div class=\"card height\">\n\n          <!-- Card image -->\n          <img class=\"card-img-top\" src=\"/assets/img/lod.webp\" alt=\"Card image cap\">\n\n          <!-- Card content -->\n          <div appBgColor class=\"card-body\">\n\n            <!-- Title -->\n            <h4 class=\"card-title\"><a>Speed and Data</a></h4>\n            <!-- Text -->\n            <p class=\"card-text\">You get to view all information about the target search users, This Request are processed at maximum speed <strong>No Delays</strong></p>\n          </div>\n\n\n        </div>\n<!-- Card -->\n    </div>\n    <div class=\"col-md-4\">\n      <!-- Card -->\n        <div id=\"animate\" class=\"card height\">\n\n          <!-- Card image -->\n          <img class=\"card-img-top\" src=\"/assets/img/user.jpg\" alt=\"Card image cap\">\n\n          <!-- Card content -->\n          <div appBgColor class=\"card-body\">\n\n            <!-- Title -->\n            <h4 class=\"card-title\"><a>Are you Excited</a></h4>\n            <!-- Text -->\n            <p class=\"card-text\"> </p>\n            <a  (click)=goToSearch() class=\"btn btn-info\">Get started <i class=\"fas fa-angle-double-right\"></i></a>\n          </div>\n\n        </div>\n\n    </div>\n\n  </div>\n\n\n</div>\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/user-welcome/user-welcome.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-welcome/user-welcome.component.ts ***!
  \********************************************************/
/*! exports provided: UserWelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWelcomeComponent", function() { return UserWelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserWelcomeComponent = /** @class */ (function () {
    function UserWelcomeComponent(router) {
        this.router = router;
    }
    UserWelcomeComponent.prototype.goToSearch = function () {
        this.router.navigate(["/github"]);
    };
    UserWelcomeComponent.prototype.ngOnInit = function () {
    };
    UserWelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-welcome',
            template: __webpack_require__(/*! ./user-welcome.component.html */ "./src/app/user-welcome/user-welcome.component.html"),
            styles: [__webpack_require__(/*! ./user-welcome.component.css */ "./src/app/user-welcome/user-welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserWelcomeComponent);
    return UserWelcomeComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: "https://api.github.com"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/collo/Desktop/Angular/Github-search/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map