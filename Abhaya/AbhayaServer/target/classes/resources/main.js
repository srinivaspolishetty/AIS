(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../commandmanagement/commandmanagement.module": [
		"./src/app/commandmanagement/commandmanagement.module.ts",
		"default~commandmanagement-commandmanagement-module~devicemanagement-devicemanagement-module~emergenc~1acc7741",
		"common",
		"commandmanagement-commandmanagement-module"
	],
	"../dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"common",
		"dashboard-dashboard-module"
	],
	"../devicemanagement/devicemanagement.module": [
		"./src/app/devicemanagement/devicemanagement.module.ts",
		"default~commandmanagement-commandmanagement-module~devicemanagement-devicemanagement-module~emergenc~1acc7741",
		"common",
		"devicemanagement-devicemanagement-module"
	],
	"../emergencymonitoring/emergencymonitoring.module": [
		"./src/app/emergencymonitoring/emergencymonitoring.module.ts",
		"default~commandmanagement-commandmanagement-module~devicemanagement-devicemanagement-module~emergenc~1acc7741",
		"common",
		"emergencymonitoring-emergencymonitoring-module"
	],
	"../healthmonitoring/healthmonitoring.module": [
		"./src/app/healthmonitoring/healthmonitoring.module.ts",
		"default~commandmanagement-commandmanagement-module~devicemanagement-devicemanagement-module~emergenc~1acc7741",
		"common",
		"healthmonitoring-healthmonitoring-module"
	],
	"../locationmonitoring/locationmonitoring.module": [
		"./src/app/locationmonitoring/locationmonitoring.module.ts",
		"default~commandmanagement-commandmanagement-module~devicemanagement-devicemanagement-module~emergenc~1acc7741",
		"common",
		"locationmonitoring-locationmonitoring-module"
	],
	"../mapview/mapview.module": [
		"./src/app/mapview/mapview.module.ts",
		"default~mapview-mapview-module~trackmanagement-trackmanagement-module",
		"common",
		"mapview-mapview-module"
	],
	"../rawdata/rawdata.module": [
		"./src/app/rawdata/rawdata.module.ts",
		"default~commandmanagement-commandmanagement-module~devicemanagement-devicemanagement-module~emergenc~1acc7741",
		"common",
		"rawdata-rawdata-module"
	],
	"../systemmanagement/systemmanagement.module": [
		"./src/app/systemmanagement/systemmanagement.module.ts",
		"default~commandmanagement-commandmanagement-module~devicemanagement-devicemanagement-module~emergenc~1acc7741",
		"common",
		"systemmanagement-systemmanagement-module"
	],
	"../trackmanagement/trackmanagement.module": [
		"./src/app/trackmanagement/trackmanagement.module.ts",
		"default~commandmanagement-commandmanagement-module~devicemanagement-devicemanagement-module~emergenc~1acc7741",
		"default~mapview-mapview-module~trackmanagement-trackmanagement-module",
		"common",
		"trackmanagement-trackmanagement-module"
	],
	"../usermanagement/usermanagement.module": [
		"./src/app/usermanagement/usermanagement.module.ts",
		"default~commandmanagement-commandmanagement-module~devicemanagement-devicemanagement-module~emergenc~1acc7741",
		"common",
		"usermanagement-usermanagement-module"
	],
	"../vehiclemanagement/vehiclemanagement.module": [
		"./src/app/vehiclemanagement/vehiclemanagement.module.ts",
		"default~commandmanagement-commandmanagement-module~devicemanagement-devicemanagement-module~emergenc~1acc7741",
		"common",
		"vehiclemanagement-vehiclemanagement-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], data: { message: 'Login Page' } },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], data: { message: 'Login Page' } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AI400';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _common_services_http_options_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/services/http.options.interceptor */ "./src/app/common/services/http.options.interceptor.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                ng_http_loader__WEBPACK_IMPORTED_MODULE_6__["NgHttpLoaderModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyC79q-pUc8WbTxviL8GCu9agKR4Tl6PDEI',
                    libraries: ['geometry']
                })
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _common_services_http_options_interceptor__WEBPACK_IMPORTED_MODULE_10__["HttpOptionsInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authgaurd/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authgaurd/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(myRoute) {
        this.myRoute = myRoute;
    }
    AuthService.prototype.sendToken = function (token) {
        localStorage.setItem('LoggedInUser', token);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('LoggedInUser');
    };
    AuthService.prototype.isLoggednIn = function () {
        return this.getToken() !== null;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('LoggedInUser');
        this.myRoute.navigate(['login']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/commandmanagement/viewcommanddetails/viewcommanddetails.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/commandmanagement/viewcommanddetails/viewcommanddetails.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1hbmRtYW5hZ2VtZW50L3ZpZXdjb21tYW5kZGV0YWlscy92aWV3Y29tbWFuZGRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/commandmanagement/viewcommanddetails/viewcommanddetails.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/commandmanagement/viewcommanddetails/viewcommanddetails.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\">Command List Details</h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Close click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h5>Task ID</h5>\n        <h4>{{selectCommandDetails.taskId}}</h4>\n      </div>\n      <div class=\"col-md-6\">\n        <h5>IMEI No</h5>\n        <h4>{{selectCommandDetails.imeiNumber}}</h4>\n      </div>\n      <div class=\"col-md-6 p-t-2\">\n          <h5>Header</h5>\n          <h4>{{selectCommandDetails.header}}</h4>\n        </div>\n        <div class=\"col-md-6 p-t-2\">\n            <h5>Random Code</h5>\n            <h4>{{selectCommandDetails.randomCode}}</h4>\n          </div>\n          <div class=\"col-md-6 p-t-2\">\n              <h5>Reply Gateway No</h5>\n              <h4>{{selectCommandDetails.replyGatewayNumber}}</h4>\n            </div>\n            <div class=\"col-md-6 p-t-2\">\n                <h5>Payload</h5>\n                <h4>{{selectCommandDetails.description}}</h4>\n              </div>\n          <div class=\"col-md-6 p-t-2\">\n              <h5>Created Date</h5>\n              <h4>{{selectCommandDetails.createdDate}}</h4>\n            </div>\n          <div class=\"col-md-6 p-t-2\">\n              <h5>Command Name</h5>\n              <h4>{{selectCommandDetails.commandName}}</h4>\n            </div>\n        <div class=\"col-md-6 p-t-2\">\n            <h5>Device Response</h5>\n            <h4>{{selectCommandDetails.deviceResponse}}</h4>\n          </div>\n        <div class=\"col-md-6 p-t-2\">\n            <h5>Device Response Time</h5>\n            <h4>{{selectCommandDetails.deviceResponseTime}}</h4>\n          </div>       \n    </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/commandmanagement/viewcommanddetails/viewcommanddetails.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/commandmanagement/viewcommanddetails/viewcommanddetails.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ViewcommanddetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcommanddetailsComponent", function() { return ViewcommanddetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_commandlist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/models/commandlist.model */ "./src/app/common/models/commandlist.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewcommanddetailsComponent = /** @class */ (function () {
    function ViewcommanddetailsComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ViewcommanddetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_commandlist_model__WEBPACK_IMPORTED_MODULE_2__["Commandlist"])
    ], ViewcommanddetailsComponent.prototype, "selectCommandDetails", void 0);
    ViewcommanddetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewcommanddetails',
            template: __webpack_require__(/*! ./viewcommanddetails.component.html */ "./src/app/commandmanagement/viewcommanddetails/viewcommanddetails.component.html"),
            styles: [__webpack_require__(/*! ./viewcommanddetails.component.css */ "./src/app/commandmanagement/viewcommanddetails/viewcommanddetails.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ViewcommanddetailsComponent);
    return ViewcommanddetailsComponent;
}());



/***/ }),

/***/ "./src/app/common/constants/constants.ts":
/*!***********************************************!*\
  !*** ./src/app/common/constants/constants.ts ***!
  \***********************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.MOBILEMINLENGTH = "10";
    Constants.MOBILEMAXLENGTH = "10";
    Constants.MOBILEPATTERN = "^[0-9]*$";
    return Constants;
}());



/***/ }),

/***/ "./src/app/common/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"row m-a-0 p-a-0\">\n    <div class=\"col-md-1\"></div>\n    <!-- <div class=\"col-md-7 p-a-0\">\n      <div class=\"header-search p-t-3\">\n        <form class=\"example\" action=\"action_page.php\">\n            <button type=\"submit\"><i class=\"icon-ic_search\"></i></button>\n            <input type=\"text\" placeholder=\"Search..\" name=\"search\">\n          </form>\n      </div>\n    </div> -->\n    <div class=\"col-md-11 p-r-3\">\n      <div class=\"header-profile dropdown-toggle\" data-toggle=\"dropdown\">\n        <i class=\"icon-ic_profile\"></i>\n        <h5 class=\"d-none d-sm-block\">{{userDetails.username}}\n          <br>\n          <span>{{userDetails.mobileNumber}}</span>\n        </h5>\n        <span class=\"d-none d-sm-block arrow-down dropdown-toggle\" data-toggle=\"dropdown\">\n          <i class=\"icon-ic_arrow_down\" aria-hidden=\"true\"></i>\n        </span>\n        <ul class=\"dropdown-menu\">\n          <li><a class=\"dropdown-item cursor-hand\"> Change Password</a></li>\n          <li><a class=\"dropdown-item cursor-hand\"> Settings</a></li>\n          <li><a class=\"dropdown-item cursor-hand\" [routerLink]=\"['/login']\"> Sign Out</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/common/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/common/models/commandlist.model.ts":
/*!****************************************************!*\
  !*** ./src/app/common/models/commandlist.model.ts ***!
  \****************************************************/
/*! exports provided: Commandlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commandlist", function() { return Commandlist; });
var Commandlist = /** @class */ (function () {
    function Commandlist() {
    }
    return Commandlist;
}());



/***/ }),

/***/ "./src/app/common/models/devicecommunication.model.ts":
/*!************************************************************!*\
  !*** ./src/app/common/models/devicecommunication.model.ts ***!
  \************************************************************/
/*! exports provided: DeviceCommunication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceCommunication", function() { return DeviceCommunication; });
var DeviceCommunication = /** @class */ (function () {
    function DeviceCommunication() {
    }
    return DeviceCommunication;
}());



/***/ }),

/***/ "./src/app/common/models/devicedetails.model.ts":
/*!******************************************************!*\
  !*** ./src/app/common/models/devicedetails.model.ts ***!
  \******************************************************/
/*! exports provided: DeviceDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetails", function() { return DeviceDetails; });
var DeviceDetails = /** @class */ (function () {
    function DeviceDetails() {
    }
    return DeviceDetails;
}());



/***/ }),

/***/ "./src/app/common/models/emergencymonitoring.model.ts":
/*!************************************************************!*\
  !*** ./src/app/common/models/emergencymonitoring.model.ts ***!
  \************************************************************/
/*! exports provided: EmergencynMonitoring */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencynMonitoring", function() { return EmergencynMonitoring; });
var EmergencynMonitoring = /** @class */ (function () {
    function EmergencynMonitoring() {
    }
    return EmergencynMonitoring;
}());



/***/ }),

/***/ "./src/app/common/models/healthmonitoring.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/models/healthmonitoring.model.ts ***!
  \*********************************************************/
/*! exports provided: HealthnMonitoring */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthnMonitoring", function() { return HealthnMonitoring; });
var HealthnMonitoring = /** @class */ (function () {
    function HealthnMonitoring() {
    }
    return HealthnMonitoring;
}());



/***/ }),

/***/ "./src/app/common/models/locationmonitoring.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/models/locationmonitoring.model.ts ***!
  \***********************************************************/
/*! exports provided: LocationMonitoring */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationMonitoring", function() { return LocationMonitoring; });
var LocationMonitoring = /** @class */ (function () {
    function LocationMonitoring() {
    }
    return LocationMonitoring;
}());



/***/ }),

/***/ "./src/app/common/models/rawdata.model.ts":
/*!************************************************!*\
  !*** ./src/app/common/models/rawdata.model.ts ***!
  \************************************************/
/*! exports provided: RawData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawData", function() { return RawData; });
var RawData = /** @class */ (function () {
    function RawData() {
    }
    return RawData;
}());



/***/ }),

/***/ "./src/app/common/models/systemmanagement.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/models/systemmanagement.model.ts ***!
  \*********************************************************/
/*! exports provided: SystemManagement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemManagement", function() { return SystemManagement; });
var SystemManagement = /** @class */ (function () {
    function SystemManagement() {
    }
    return SystemManagement;
}());



/***/ }),

/***/ "./src/app/common/models/user.model.ts":
/*!*********************************************!*\
  !*** ./src/app/common/models/user.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/common/models/vehicle.model.ts":
/*!************************************************!*\
  !*** ./src/app/common/models/vehicle.model.ts ***!
  \************************************************/
/*! exports provided: Vehicledetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehicledetails", function() { return Vehicledetails; });
var Vehicledetails = /** @class */ (function () {
    function Vehicledetails() {
    }
    return Vehicledetails;
}());



/***/ }),

/***/ "./src/app/common/services/devicemanagement.api.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/services/devicemanagement.api.ts ***!
  \*********************************************************/
/*! exports provided: DeviceManagementServiceApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceManagementServiceApi", function() { return DeviceManagementServiceApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceManagementServiceApi = /** @class */ (function () {
    function DeviceManagementServiceApi(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'my-auth-token'
            })
        };
    }
    DeviceManagementServiceApi.prototype.getDeviceDetails = function (page, size, searchDate, searchValue) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/deviceDetails";
        url += "?page=" + page + "&size=" + size + "&imeiNumber=" + searchValue + "&searchDate=" + searchDate;
        return this.httpClient.get(url);
    };
    DeviceManagementServiceApi.prototype.getDeviceCommDetails = function (page, size, searchDate, searchValue, action, actionValue) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/deviceCommunication";
        url += "?page=" + page + "&size=" + size + "&imeiNumber=" + searchValue + "&searchDate=" + searchDate + "&" + action + "=" + actionValue;
        return this.httpClient.get(url);
    };
    DeviceManagementServiceApi.prototype.updateDeviceDetails = function (deviceDetails) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/simDetails";
        return this.httpClient.post(url, deviceDetails, this.httpOptions);
    };
    DeviceManagementServiceApi.prototype.getliveDevices = function () {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/deviceCommunication?status=Communicating";
        return this.httpClient.get("" + url);
    };
    DeviceManagementServiceApi.prototype.getPackedDetails = function (packetType, imeiNumber) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/" + packetType;
        url += "?imeiNumber=" + imeiNumber;
        return this.httpClient.get("" + url);
    };
    DeviceManagementServiceApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DeviceManagementServiceApi);
    return DeviceManagementServiceApi;
}());



/***/ }),

/***/ "./src/app/common/services/http.options.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/services/http.options.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: HttpOptionsInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpOptionsInterceptor", function() { return HttpOptionsInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttpOptionsInterceptor = /** @class */ (function () {
    function HttpOptionsInterceptor() {
    }
    HttpOptionsInterceptor.prototype.intercept = function (req, next) {
        req.clone({ setHeaders: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            } });
        return next.handle(req);
    };
    HttpOptionsInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HttpOptionsInterceptor);
    return HttpOptionsInterceptor;
}());



/***/ }),

/***/ "./src/app/common/services/systemmanagement.api.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/services/systemmanagement.api.ts ***!
  \*********************************************************/
/*! exports provided: SystemManagementServiceApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemManagementServiceApi", function() { return SystemManagementServiceApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SystemManagementServiceApi = /** @class */ (function () {
    function SystemManagementServiceApi(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'my-auth-token'
            })
        };
    }
    SystemManagementServiceApi.prototype.getAllSystemProperties = function (page, size, searchDate, searchValue) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/systemProperties";
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue;
        return this.httpClient.get(url);
    };
    SystemManagementServiceApi.prototype.addeditsystemprop = function (SystemManagement) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/systemProperties";
        return this.httpClient.post(url, SystemManagement, this.httpOptions);
    };
    SystemManagementServiceApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SystemManagementServiceApi);
    return SystemManagementServiceApi;
}());



/***/ }),

/***/ "./src/app/common/services/toaster.service.ts":
/*!****************************************************!*\
  !*** ./src/app/common/services/toaster.service.ts ***!
  \****************************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToasterService = /** @class */ (function () {
    // http://technoidlab.com/demos/ng6-toastr-notifications/
    function ToasterService(toastr) {
        this.toastr = toastr;
    }
    ToasterService.prototype.showSuccess = function (position, msg) {
        this.toastr.successToastr(msg, 'Success!', { position: position });
    };
    ToasterService.prototype.showError = function (position, msg) {
        this.toastr.errorToastr(msg, 'Oops!', { position: position });
    };
    ToasterService.prototype.showWarning = function (position, msg) {
        this.toastr.warningToastr(msg, 'Alert!', { position: position });
    };
    ToasterService.prototype.showInfo = function (position, msg) {
        this.toastr.infoToastr(msg, 'Info', { position: position });
    };
    ToasterService.prototype.showCustom = function (position) {
        this.toastr.customToastr("<span style='color: green; font - size: 16px; text - align: center; '>Custom Toast</span>", null, { enableHTML: true, position: position });
    };
    ToasterService.prototype.showToast = function (position) {
        if (position === void 0) { position = 'top-center'; }
        this.showSuccess(position, '');
        this.toastr.infoToastr('This is a toast.', 'Toast', { position: position });
    };
    ToasterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_1__["ToastrManager"]])
    ], ToasterService);
    return ToasterService;
}());



/***/ }),

/***/ "./src/app/common/services/vehiclemanagement.api.ts":
/*!**********************************************************!*\
  !*** ./src/app/common/services/vehiclemanagement.api.ts ***!
  \**********************************************************/
/*! exports provided: VehicleManagementServiceApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleManagementServiceApi", function() { return VehicleManagementServiceApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleManagementServiceApi = /** @class */ (function () {
    function VehicleManagementServiceApi(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'my-auth-token'
            })
        };
    }
    VehicleManagementServiceApi.prototype.getAllVehicleDetails = function (page, size) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/vehicleDetails";
        url += "?page=" + page + "&size=" + size;
        return this.httpClient.get(url);
    };
    VehicleManagementServiceApi.prototype.addeditvehicle = function (vehicleDetails) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/createVehicle";
        return this.httpClient.post(url, vehicleDetails, this.httpOptions);
    };
    VehicleManagementServiceApi.prototype.vehicleMap = function (vehicleMapDetails) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/mapImeiVehicle";
        return this.httpClient.post(url, vehicleMapDetails, this.httpOptions);
    };
    VehicleManagementServiceApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VehicleManagementServiceApi);
    return VehicleManagementServiceApi;
}());



/***/ }),

/***/ "./src/app/common/sidemenu/sidemenu.component.css":
/*!********************************************************!*\
  !*** ./src/app/common/sidemenu/sidemenu.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zaWRlbWVudS9zaWRlbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/sidemenu/sidemenu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/common/sidemenu/sidemenu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button class=\"btn-menu\" type=\"button\" [ngClass]=\"{'collapsed' : showmenu== false}\" (click)=\"showhide($event)\">\n    <i *ngIf=\"showmenu== false\" class=\"p-l-6 icon-ic_menu-back\" aria-hidden=\"true\"></i>\n    <i *ngIf=\"showmenu== true\" class=\"icon-ic_menu\" aria-hidden=\"true\"></i>\n</button> -->\n<div class=\"otsi-logo\" [ngClass]=\"{'small small-logo' : showmenu== false}\"></div>\n<div>\n    <div>\n    <div *ngIf=\"showmenu== true\" class=\"menu-block\">\n        <a [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\" (click)=\"hidesubmenu()\">\n            <i class=\"icon-ic_dashboard\"></i>\n            <br> <span>DASHBOARD</span></a>\n\n        <a [routerLink]=\"['/mapview']\" routerLinkActive=\"active\" (click)=\"hidesubmenu()\">\n            <i class=\"icon-ic_mapview\"></i>\n            <br> <span>MAP VIEW</span></a>\n\n        <!-- <a [routerLink]=\"['/devicereport']\" routerLinkActive=\"active\" (click)=\"hidesubmenu()\">\n            <i class=\"icon-ic_devicereport\"></i>\n            <br> <span>DEVICE REPORT</span></a> -->\n\n    </div>\n    <ul [ngClass]=\"{'show m-t-3': showmenu== true}\" class=\"menu\" id=\"accordionEx\" role=\"tablist\"\n        aria-multiselectable=\"true\">\n\n        <li *ngIf=\"showmenu== false\" class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n            <a [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\" (click)=\"hidesubmenu()\">\n                <i class=\"icon-ic_dashboard\"></i>\n                <span>Dashboard</span></a>\n        </li>\n        <li *ngIf=\"showmenu== false\" class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n            <a [routerLink]=\"['/mapview']\" routerLinkActive=\"active\" (click)=\"hidesubmenu()\">\n                <i class=\"icon-ic_mapview\"></i>\n                <span>Map View</span></a>\n        </li>\n        <!-- <li *ngIf=\"showmenu== false\" class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n            <a [routerLink]=\"['/devicereport']\" routerLinkActive=\"active\" (click)=\"hidesubmenu($event)\">\n                <i class=\"icon-ic_devicereport\"></i>\n                <span>Device Report</span></a>\n        </li> -->\n\n\n        <li class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n            <a (click)=\"hidesubmenu('')\" [routerLink]=\"['/locationmonitoring']\" routerLinkActive=\"active\"\n                href=\"#drivermanagementbody\"><i class=\"icon-ic_LocationManagement\" aria-hidden=\"true\"></i> <span>Location\n                    Management</span></a>\n        </li>\n\n        <li class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n            <a (click)=\"hidesubmenu('')\" [routerLink]=\"['/healthmonitoring']\" routerLinkActive=\"active\"\n                href=\"#drivermanagementbody\"><i class=\"icon-ic_HealthManagement\" aria-hidden=\"true\"></i> <span>Health\n                    Management</span></a>\n        </li>\n        <li class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n                <a (click)=\"hidesubmenu('')\" [routerLink]=\"['/emergencymonitoring']\" routerLinkActive=\"active\"\n                    href=\"#drivermanagementbody\"><i class=\"icon-ic_EmergencyManagement\" aria-hidden=\"true\"></i>\n                    <span>Emergency Management</span></a>\n            </li>\n            <li class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n                <a (click)=\"hidesubmenu('')\" [routerLink]=\"['/vehiclemanagement']\" routerLinkActive=\"active\"\n                    href=\"#drivermanagementbody\"><i class=\"icon-ic_VehicleManagement\" aria-hidden=\"true\"></i> <span>Vehicle Management</span></a>\n            </li>\n           \n            <li class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n                    <a  class=\"hasmenu\" [ngClass]=\"{'active': activelink=='tripmanagementbody'}\" id=\"tripmanagement\" data-toggle=\"collapse\"\n                    data-parent=\"#accordionEx\" href=\"#tripmanagementbody\"><i class=\"icon-ic_track\" aria-hidden=\"true\"></i>\n                        <span>Trip Management</span></a>\n                        <ul id=\"tripmanagementbody\" class=\"collapse menu-sub\" aria-labelledby=\"tripmanagement\"\n                        data-parent=\"#accordionEx\">\n                        <li class=\"menu-sub-item\"><a [routerLink]=\"['/tripmanagement/tripcreate']\" routerLinkActive=\"active\"\n                                 (click)=\"hidesubmenu($event)\">\n                                 Create Trip</a></li>\n                        <!-- <li class=\"menu-sub-item\"><a [routerLink]=\"['/tripmanagement/trackdevice']\" routerLinkActive=\"active\"\n                                (click)=\"hidesubmenu($event)\">\n                            Track Devices</a></li> -->\n                        <li class=\"menu-sub-item\"><a [routerLink]=\"['/tripmanagement/tripdetails']\" routerLinkActive=\"active\"\n                                (click)=\"hidesubmenu($event)\">\n                            Trip Details</a></li>\n                            <li class=\"menu-sub-item\"><a [routerLink]=\"['/tripmanagement/routedeviation']\" routerLinkActive=\"active\"\n                                (click)=\"hidesubmenu($event)\">\n                            Route Deviation</a></li>\n                    </ul>\n                </li>\n        <li class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n                <a class=\"hasmenu\" [ngClass]=\"{'active': activelink=='devicemanagementbody'}\" id=\"devicemanagement\" data-toggle=\"collapse\"\n                    data-parent=\"#accordionEx\" href=\"#devicemanagementbody\"><i class=\"icon-ic_modemdetails\"\n                        aria-hidden=\"true\"></i> <span>Device Management</span><i class=\"icon-ic_arrow_down\"\n                        aria-hidden=\"true\"></i></a>\n                <ul id=\"devicemanagementbody\" class=\"collapse menu-sub\" aria-labelledby=\"devicemanagement\"\n                    data-parent=\"#accordionEx\">\n                    <li class=\"menu-sub-item\"><a [routerLink]=\"['/devicehealthmanagement/devicedetails']\" routerLinkActive=\"active\"\n                             (click)=\"hidesubmenu($event)\"> <!-- <i class=\"icon-ic_modemdetails\" aria-hidden=\"true\"></i> -->\n                            Device Details</a></li>\n                    <li class=\"menu-sub-item\"><a [routerLink]=\"['/devicehealthmanagement/devicecommunication']\" routerLinkActive=\"active\"\n                            (click)=\"hidesubmenu($event)\"><!-- <i class=\"icon-ic_modemdetails\" aria-hidden=\"true\"></i> -->\n                            Device Communication</a></li>\n                </ul>\n            </li>\n            <li class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n                    <a class=\"hasmenu\" [ngClass]=\"{'active': activelink=='commandmanagementbody'}\" id=\"commandmanagement\" data-toggle=\"collapse\"\n                        data-parent=\"#accordionEx\" href=\"#commandmanagementbody\"><i class=\"icon-ic_command\"\n                            aria-hidden=\"true\"></i> <span>Command Management</span><i class=\"icon-ic_arrow_down\"\n                            aria-hidden=\"true\"></i></a>\n                    <ul id=\"commandmanagementbody\" class=\"collapse menu-sub\" aria-labelledby=\"commandmanagement\"\n                        data-parent=\"#accordionEx\">\n                        <li class=\"menu-sub-item\"><a [routerLink]=\"['/commandmanagement/commandexecute']\" routerLinkActive=\"active\"\n                                 (click)=\"hidesubmenu($event)\"><!-- <i class=\"icon-ic_DriverManagement\" aria-hidden=\"true\"></i> -->\n                                Command Executive</a></li>\n                        <li class=\"menu-sub-item\"><a [routerLink]=\"['/commandmanagement/commandlist']\" routerLinkActive=\"active\"\n                                (click)=\"hidesubmenu($event)\"> <!-- <i class=\"icon-ic_driverduty\" aria-hidden=\"true\"></i> -->\n                                Command List</a></li>\n                    </ul>\n            </li>\n\n            <li class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n                <a (click)=\"hidesubmenu('')\" [routerLink]=\"['/systemmanagement']\" routerLinkActive=\"active\"\n                    href=\"#drivermanagementbody\"><i class=\"icon-ic_system_m\" aria-hidden=\"true\"></i> <span>System Management</span></a>\n            </li>\n\n        <li class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n            <a (click)=\"hidesubmenu('')\" [routerLink]=\"['/rawdata']\" routerLinkActive=\"active\"\n                href=\"#drivermanagementbody\"><i class=\"icon-ic_rawData\" aria-hidden=\"true\"></i> <span>Raw\n                    Data</span></a>\n        </li>\n        <li class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n            <a (click)=\"hidesubmenu('')\" [routerLink]=\"['/users']\" routerLinkActive=\"active\"\n                href=\"#drivermanagementbody\"><i class=\"icon-ic_UserManagement\" aria-hidden=\"true\"></i>\n                <span>User Management</span></a>\n        </li>\n\n\n        <!-- <li class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n            <a [ngClass]=\"{'active': activelink=='userprofilebody'}\" id=\"userprofile\" data-toggle=\"collapse\"\n                data-parent=\"#accordionEx\" href=\"#userprofilebody\"><i class=\"icon-ic_VehicleManagement\"\n                    aria-hidden=\"true\"></i> <span>Vehicle Management</span><i class=\"icon-ic_arrow_down\"\n                    aria-hidden=\"true\"></i></a>\n            <ul id=\"userprofilebody\" class=\"collapse menu-sub\" aria-labelledby=\"userprofile\" data-parent=\"#accordionEx\">\n                <li class=\"menu-sub-item\"><a [routerLink]=\"['/usermanagement']\" routerLinkActive=\"active\"\n                        (click)=\"hidesubmenu($event)\"><i class=\"icon-ic_VehicleManagement\" aria-hidden=\"true\"></i>\n                        Vehicles</a></li>\n                <li class=\"menu-sub-item\"><a [routerLink]=\"['/usermanagement']\" routerLinkActive=\"active\"\n                        (click)=\"hidesubmenu($event)\"><i class=\"icon-ic_SuspiciousVehicles\" aria-hidden=\"true\"></i>\n                        Suspicious Vehicles</a></li>\n            </ul>\n        </li>\n        <li class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n            <a [ngClass]=\"{'active': activelink=='drivermanagementbody'}\" id=\"drivermanagement\" data-toggle=\"collapse\"\n                data-parent=\"#accordionEx\" href=\"#drivermanagementbody\"><i class=\"icon-ic_DriverManagement\"\n                    aria-hidden=\"true\"></i> <span>Driver Management</span><i class=\"icon-ic_arrow_down\"\n                    aria-hidden=\"true\"></i></a>\n            <ul id=\"drivermanagementbody\" class=\"collapse menu-sub\" aria-labelledby=\"drivermanagement\"\n                data-parent=\"#accordionEx\">\n                <li class=\"menu-sub-item\"><a [routerLink]=\"['/drivermanagement']\" routerLinkActive=\"active\"\n                        (click)=\"hidesubmenu($event)\"><i class=\"icon-ic_DriverManagement\" aria-hidden=\"true\"></i>\n                        Drivers</a></li>\n                <li class=\"menu-sub-item\"><a [routerLink]=\"['/drivermanagement']\" routerLinkActive=\"active\"\n                        (click)=\"hidesubmenu($event)\"><i class=\"icon-ic_driverduty\" aria-hidden=\"true\"></i>\n                        Driver Duty Details</a></li>\n            </ul>\n        </li>\n        <li class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n            <a [ngClass]=\"{'active': activelink=='tripmanagementbody'}\" id=\"tripmanagement\" data-toggle=\"collapse\"\n                data-parent=\"#accordionEx\" href=\"#tripmanagementbody\"><i class=\"icon-ic_TripManagement\"\n                    aria-hidden=\"true\"></i> <span>Trip Management</span><i class=\"icon-ic_arrow_down\"\n                    aria-hidden=\"true\"></i></a>\n            <ul id=\"tripmanagementbody\" class=\"collapse menu-sub\" aria-labelledby=\"tripmanagement\"\n                data-parent=\"#accordionEx\">\n                <li class=\"menu-sub-item\"><a [routerLink]=\"['/tripmanagement']\" routerLinkActive=\"active\"\n                        (click)=\"hidesubmenu($event)\"><i class=\"icon-ic_TripManagement\" aria-hidden=\"true\"></i>\n                        Vehicle Tracking</a></li>\n                <li class=\"menu-sub-item\"><a [routerLink]=\"['/tripmanagement']\" routerLinkActive=\"active\"\n                        (click)=\"hidesubmenu($event)\"><i class=\"icon-ic_tripdetails\" aria-hidden=\"true\"></i>Trip\n                        Details</a></li>\n                <li class=\"menu-sub-item\"><a [routerLink]=\"['/tripmanagement']\" routerLinkActive=\"active\"\n                        (click)=\"hidesubmenu($event)\"><i class=\"icon-ic_rootdeviation\" aria-hidden=\"true\"></i>\n                        Route Deviation</a></li>\n                <li class=\"menu-sub-item\"><a [routerLink]=\"['/tripmanagement']\" routerLinkActive=\"active\"\n                        (click)=\"hidesubmenu($event)\"><i class=\"icon-ic_panicalert\" aria-hidden=\"true\"></i>\n                        Panic Alerts</a></li>\n                <li class=\"menu-sub-item\"><a [routerLink]=\"['/tripmanagement']\" routerLinkActive=\"active\"\n                        (click)=\"hidesubmenu($event)\"><i class=\"icon-ic_video_streaming\" aria-hidden=\"true\"></i>\n                        Video Streaming</a></li>\n            </ul>\n        </li>\n        <li class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n            <a [ngClass]=\"{'active': activelink=='devicemanagementbody'}\" id=\"devicemanagement\" data-toggle=\"collapse\"\n                data-parent=\"#accordionEx\" href=\"#devicemanagementbody\"><i class=\"icon-ic_DeviceManagement\"\n                    aria-hidden=\"true\"></i> <span>Device Management</span><i class=\"icon-ic_arrow_down\"\n                    aria-hidden=\"true\"></i></a>\n            <ul id=\"devicemanagementbody\" class=\"collapse menu-sub\" aria-labelledby=\"devicemanagement\"\n                data-parent=\"#accordionEx\">\n                <li class=\"menu-sub-item\"><a [routerLink]=\"['/devicemanagement']\" routerLinkActive=\"active\"\n                        (click)=\"hidesubmenu($event)\"><i class=\"icon-ic_DeviceManagement\" aria-hidden=\"true\"></i> Device\n                        Details</a></li>\n                <li class=\"menu-sub-item\"><a [routerLink]=\"['/devicemanagement']\" routerLinkActive=\"active\"\n                        (click)=\"hidesubmenu($event)\"><i class=\"icon-ic_Reports\" aria-hidden=\"true\"></i> Device\n                        Report</a></li>\n                <li class=\"menu-sub-item\"><a [routerLink]=\"['/devicemanagement']\" routerLinkActive=\"active\"\n                        (click)=\"hidesubmenu($event)\"><i class=\"icon-ic_CommunicationDetails\" aria-hidden=\"true\"></i>\n                        Communication Details</a></li>\n                <li class=\"menu-sub-item\"><a [routerLink]=\"['/devicemanagement']\" routerLinkActive=\"active\"\n                        (click)=\"hidesubmenu($event)\"><i class=\"icon-ic_Movement_Details\" aria-hidden=\"true\"></i>\n                        Movement Details</a></li>\n                <li class=\"menu-sub-item\"><a [routerLink]=\"['/devicemanagement']\" routerLinkActive=\"active\"\n                        (click)=\"hidesubmenu($event)\"><i class=\"icon-ic_rawData\" aria-hidden=\"true\"></i> Raw\n                        Data</a></li>\n            </ul>\n        </li>\n        <li class=\"menu-item\" [ngClass]=\"{'menu-small' : showmenu== false}\">\n            <a [ngClass]=\"{'active': activelink=='usermanagementbody'}\" id=\"usermanagement\" data-toggle=\"collapse\"\n                data-parent=\"#accordionEx\" href=\"#usermanagementbody\"><i class=\"icon-ic_UserManagement\"\n                    aria-hidden=\"true\"></i> <span>Users Management</span>\n                <i *ngIf=\"activelink!=='usermanagementbody'\" class=\"icon-ic_arrow_down\" aria-hidden=\"true\"></i>\n                <i *ngIf=\"activelink =='usermanagementbody'\" class=\"icon-ic_arrow_up\" aria-hidden=\"true\"></i>\n            </a>\n            <ul id=\"usermanagementbody\" class=\"collapse menu-sub\" aria-labelledby=\"usermanagement\"\n                data-parent=\"#accordionEx\">\n                <li class=\"menu-sub-item\"><a [routerLink]=\"['/usermanagement']\" routerLinkActive=\"active\"\n                        (click)=\"hidesubmenu($event)\"><i class=\"icon-ic_user\" aria-hidden=\"true\"></i> User</a>\n                </li>\n                <li class=\"menu-sub-item\"><a [routerLink]=\"['/usermanagement']\" routerLinkActive=\"active\"\n                        (click)=\"hidesubmenu($event)\"><i class=\"icon-ic_Admin\" aria-hidden=\"true\"></i>\n                        Administrative Hierarchy</a></li>\n            </ul>\n        </li> -->\n    </ul>\n</div>\n</div>\n<!-- <footer class=\"footer\">\n    <div class=\" footer-details\" [ngClass]=\"{'footer-small' : showmenu== false}\">\n        <span>Developed By</span>\n        <img src=\"assets/images/logo_otsi.png\">\n    </div>\n</footer> -->"

/***/ }),

/***/ "./src/app/common/sidemenu/sidemenu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/sidemenu/sidemenu.component.ts ***!
  \*******************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent() {
        this.sideMenu = false;
        this.expandDiv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showmenu = true;
    }
    SidemenuComponent.prototype.ngOnInit = function () {
    };
    SidemenuComponent.prototype.showhide = function (event) {
        this.showmenu = !this.showmenu;
        this.sideMenu = !this.sideMenu;
        this.expandDiv.emit(this.showmenu);
        var elements = document.getElementsByClassName('collapse menu-sub show');
        if (elements.length > 0) {
            elements[0].classList.remove('show');
        }
    };
    SidemenuComponent.prototype.houtmenu = function (event) {
        if (this.sideMenu) {
            this.showmenu = false;
            // this.expandDiv.emit(this.showmenu);
            var elements = document.getElementsByClassName('collapse menu-sub show');
            if (elements.length > 0) {
                // elements[0].classList.remove('show');
            }
        }
    };
    SidemenuComponent.prototype.hovermenu = function (event) {
        this.showmenu = true;
        this.expandDiv.emit(this.showmenu);
        var elements = document.getElementsByClassName('collapse menu-sub show');
        if (elements.length > 0) {
            elements[0].classList.remove('show');
        }
    };
    SidemenuComponent.prototype.hidesubmenu = function (event) {
        if (event !== undefined && event !== '') {
            var target = event.currentTarget;
            var pElement = target.parentElement.parentElement;
            var pclassAttr = pElement.attributes.id;
            this.activelink = pclassAttr.value;
        }
        else {
            this.activelink = '';
            var elements = document.getElementsByClassName('collapse menu-sub show');
            if (elements.length > 0) {
                elements[0].classList.remove('show');
            }
            return false;
        }
        if (!this.showmenu) {
            var target = event.currentTarget;
            target.parentElement.parentElement.classList.remove('show');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidemenuComponent.prototype, "expandDiv", void 0);
    SidemenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/common/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.css */ "./src/app/common/sidemenu/sidemenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.component */ "./src/app/core/core.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _core_component__WEBPACK_IMPORTED_MODULE_2__["CoreComponent"],
        children: [
            { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            { path: 'mapview', loadChildren: '../mapview/mapview.module#MapviewModule' },
            { path: 'locationmonitoring', loadChildren: '../locationmonitoring/locationmonitoring.module#LocationmonitoringModule' },
            { path: 'devicehealthmanagement', loadChildren: '../devicemanagement/devicemanagement.module#DevicemanagementModule' },
            { path: 'commandmanagement', loadChildren: '../commandmanagement/commandmanagement.module#CommandmanagementModule' },
            { path: 'healthmonitoring', loadChildren: '../healthmonitoring/healthmonitoring.module#HealthmonitoringModule' },
            { path: 'emergencymonitoring', loadChildren: '../emergencymonitoring/emergencymonitoring.module#EmergencymonitoringModule' },
            { path: 'rawdata', loadChildren: '../rawdata/rawdata.module#RawdataModule' },
            { path: 'users', loadChildren: '../usermanagement/usermanagement.module#UsermanagementModule' },
            { path: 'tripmanagement', loadChildren: '../trackmanagement/trackmanagement.module#TrackmanagementModule' },
            { path: 'vehiclemanagement', loadChildren: '../vehiclemanagement/vehiclemanagement.module#VehiclemanagementModule' },
            { path: 'systemmanagement', loadChildren: '../systemmanagement/systemmanagement.module#SystemmanagementModule' },
        ]
    }
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.component.css":
/*!*****************************************!*\
  !*** ./src/app/core/core.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29yZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/core.component.html":
/*!******************************************!*\
  !*** ./src/app/core/core.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"container-left\" [ngClass]=\"{'collapsed' : showmenu== false}\">\n        <app-sidemenu (expandDiv)=\"expandRightDiv($event)\"></app-sidemenu>\n    </div>\n    <div class=\"container-right\" [ngClass]=\"{'expand' : showmenu== false}\">\n        <app-header></app-header>\n        <div class=\"main-content p-l-3 p-r-6\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/core.component.ts":
/*!****************************************!*\
  !*** ./src/app/core/core.component.ts ***!
  \****************************************/
/*! exports provided: CoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreComponent", function() { return CoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoreComponent = /** @class */ (function () {
    function CoreComponent() {
        this.showmenu = true;
    }
    CoreComponent.prototype.ngOnInit = function () {
    };
    CoreComponent.prototype.expandRightDiv = function (value) {
        this.showmenu = value;
    };
    CoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-core',
            template: __webpack_require__(/*! ./core.component.html */ "./src/app/core/core.component.html"),
            styles: [__webpack_require__(/*! ./core.component.css */ "./src/app/core/core.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoreComponent);
    return CoreComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core.component */ "./src/app/core/core.component.ts");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _common_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/sidemenu/sidemenu.component */ "./src/app/common/sidemenu/sidemenu.component.ts");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _devicemanagement_deviceactivation_deviceactivation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../devicemanagement/deviceactivation/deviceactivation.component */ "./src/app/devicemanagement/deviceactivation/deviceactivation.component.ts");
/* harmony import */ var _emergencymonitoring_emergencydetails_emergencydetails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../emergencymonitoring/emergencydetails/emergencydetails.component */ "./src/app/emergencymonitoring/emergencydetails/emergencydetails.component.ts");
/* harmony import */ var _healthmonitoring_healthdetails_healthdetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../healthmonitoring/healthdetails/healthdetails.component */ "./src/app/healthmonitoring/healthdetails/healthdetails.component.ts");
/* harmony import */ var _locationmonitoring_locationdetails_locationdetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../locationmonitoring/locationdetails/locationdetails.component */ "./src/app/locationmonitoring/locationdetails/locationdetails.component.ts");
/* harmony import */ var _rawdata_rawdatadetails_rawdatadetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../rawdata/rawdatadetails/rawdatadetails.component */ "./src/app/rawdata/rawdatadetails/rawdatadetails.component.ts");
/* harmony import */ var _devicemanagement_devicecommunication_devicecomdetails_devicecomdetails_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../devicemanagement/devicecommunication/devicecomdetails/devicecomdetails.component */ "./src/app/devicemanagement/devicecommunication/devicecomdetails/devicecomdetails.component.ts");
/* harmony import */ var _devicemanagement_devicedetails_devicedetails_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../devicemanagement/devicedetails/devicedetails.component */ "./src/app/devicemanagement/devicedetails/devicedetails.component.ts");
/* harmony import */ var _usermanagement_userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../usermanagement/userdetails/userdetails.component */ "./src/app/usermanagement/userdetails/userdetails.component.ts");
/* harmony import */ var _devicemanagement_packetdetails_packetdetails_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../devicemanagement/packetdetails/packetdetails.component */ "./src/app/devicemanagement/packetdetails/packetdetails.component.ts");
/* harmony import */ var _vehiclemanagement_addeditvehicle_addeditvehicle_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../vehiclemanagement/addeditvehicle/addeditvehicle.component */ "./src/app/vehiclemanagement/addeditvehicle/addeditvehicle.component.ts");
/* harmony import */ var _vehiclemanagement_vehiclemapping_vehiclemapping_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../vehiclemanagement/vehiclemapping/vehiclemapping.component */ "./src/app/vehiclemanagement/vehiclemapping/vehiclemapping.component.ts");
/* harmony import */ var _systemmanagement_addeditsystemprop_addeditsystemprop_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../systemmanagement/addeditsystemprop/addeditsystemprop.component */ "./src/app/systemmanagement/addeditsystemprop/addeditsystemprop.component.ts");
/* harmony import */ var _commandmanagement_viewcommanddetails_viewcommanddetails_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../commandmanagement/viewcommanddetails/viewcommanddetails.component */ "./src/app/commandmanagement/viewcommanddetails/viewcommanddetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_core_component__WEBPACK_IMPORTED_MODULE_3__["CoreComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _common_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_6__["SidemenuComponent"], _common_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _devicemanagement_deviceactivation_deviceactivation_component__WEBPACK_IMPORTED_MODULE_8__["DeviceactivationComponent"], _emergencymonitoring_emergencydetails_emergencydetails_component__WEBPACK_IMPORTED_MODULE_9__["EmergencydetailsComponent"],
                _healthmonitoring_healthdetails_healthdetails_component__WEBPACK_IMPORTED_MODULE_10__["HealthdetailsComponent"], _locationmonitoring_locationdetails_locationdetails_component__WEBPACK_IMPORTED_MODULE_11__["LocationdetailsComponent"], _rawdata_rawdatadetails_rawdatadetails_component__WEBPACK_IMPORTED_MODULE_12__["RawdatadetailsComponent"], _devicemanagement_devicecommunication_devicecomdetails_devicecomdetails_component__WEBPACK_IMPORTED_MODULE_13__["DevicecomdetailsComponent"],
                _devicemanagement_devicedetails_devicedetails_component__WEBPACK_IMPORTED_MODULE_14__["DevicedetailsComponent"], _usermanagement_userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_15__["UserdetailsComponent"], _devicemanagement_packetdetails_packetdetails_component__WEBPACK_IMPORTED_MODULE_16__["PacketdetailsComponent"], _vehiclemanagement_addeditvehicle_addeditvehicle_component__WEBPACK_IMPORTED_MODULE_17__["AddeditvehicleComponent"],
                _vehiclemanagement_vehiclemapping_vehiclemapping_component__WEBPACK_IMPORTED_MODULE_18__["VehiclemappingComponent"], _systemmanagement_addeditsystemprop_addeditsystemprop_component__WEBPACK_IMPORTED_MODULE_19__["AddeditsystempropComponent"], _commandmanagement_viewcommanddetails_viewcommanddetails_component__WEBPACK_IMPORTED_MODULE_20__["ViewcommanddetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _core_routing_module__WEBPACK_IMPORTED_MODULE_4__["CoreRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            entryComponents: [_devicemanagement_deviceactivation_deviceactivation_component__WEBPACK_IMPORTED_MODULE_8__["DeviceactivationComponent"], _emergencymonitoring_emergencydetails_emergencydetails_component__WEBPACK_IMPORTED_MODULE_9__["EmergencydetailsComponent"],
                _healthmonitoring_healthdetails_healthdetails_component__WEBPACK_IMPORTED_MODULE_10__["HealthdetailsComponent"], _locationmonitoring_locationdetails_locationdetails_component__WEBPACK_IMPORTED_MODULE_11__["LocationdetailsComponent"], _rawdata_rawdatadetails_rawdatadetails_component__WEBPACK_IMPORTED_MODULE_12__["RawdatadetailsComponent"], _devicemanagement_devicecommunication_devicecomdetails_devicecomdetails_component__WEBPACK_IMPORTED_MODULE_13__["DevicecomdetailsComponent"],
                _devicemanagement_devicedetails_devicedetails_component__WEBPACK_IMPORTED_MODULE_14__["DevicedetailsComponent"], _usermanagement_userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_15__["UserdetailsComponent"], _devicemanagement_packetdetails_packetdetails_component__WEBPACK_IMPORTED_MODULE_16__["PacketdetailsComponent"], _vehiclemanagement_addeditvehicle_addeditvehicle_component__WEBPACK_IMPORTED_MODULE_17__["AddeditvehicleComponent"],
                _vehiclemanagement_vehiclemapping_vehiclemapping_component__WEBPACK_IMPORTED_MODULE_18__["VehiclemappingComponent"], _systemmanagement_addeditsystemprop_addeditsystemprop_component__WEBPACK_IMPORTED_MODULE_19__["AddeditsystempropComponent"], _commandmanagement_viewcommanddetails_viewcommanddetails_component__WEBPACK_IMPORTED_MODULE_20__["ViewcommanddetailsComponent"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/devicemanagement/deviceactivation/deviceactivation.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/devicemanagement/deviceactivation/deviceactivation.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZW1hbmFnZW1lbnQvZGV2aWNlYWN0aXZhdGlvbi9kZXZpY2VhY3RpdmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/devicemanagement/deviceactivation/deviceactivation.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/devicemanagement/deviceactivation/deviceactivation.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Activate Device</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Close click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row\">\n      <div class=\"col-md-6\">\n          <h5>IMEI Number</h5>\n          <input type=\"text\" class=\"form-control\" placeholder=\"IMEI Number\" readonly [(ngModel)]=\"deviceDetails.imeiNumber\">\n        </div>\n    <div class=\"col-md-6\">\n      <h5>Header</h5>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Header\" [(ngModel)]=\"deviceActivedata.header\">\n    </div>\n  </div>\n  <div class=\"row m-t-3\">\n    <div class=\"col-md-6\">\n      <h5>Random Code</h5>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Random Code\" [(ngModel)]=\"deviceActivedata.randomCode\">\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Reply Gateway Number</h5>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Reply Gateway Number\"\n        [(ngModel)]=\"deviceActivedata.replyGatewaynumber\">\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"submit\" class=\"btn-secondary\">Cancel</button>\n  <button type=\"submit\" class=\"btn-primary\" >Activate</button>\n</div>"

/***/ }),

/***/ "./src/app/devicemanagement/deviceactivation/deviceactivation.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/devicemanagement/deviceactivation/deviceactivation.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DeviceactivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceactivationComponent", function() { return DeviceactivationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeviceactivationComponent = /** @class */ (function () {
    function DeviceactivationComponent(activeModal) {
        this.activeModal = activeModal;
        this.showFilters = false;
    }
    DeviceactivationComponent.prototype.ngOnInit = function () {
    };
    DeviceactivationComponent.prototype.onSubmit = function () {
        this.activeModal.close();
    };
    DeviceactivationComponent.prototype.btnShowFilters = function () {
        this.showFilters = !this.showFilters;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DeviceactivationComponent.prototype, "deviceDetails", void 0);
    DeviceactivationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deviceactivation',
            template: __webpack_require__(/*! ./deviceactivation.component.html */ "./src/app/devicemanagement/deviceactivation/deviceactivation.component.html"),
            styles: [__webpack_require__(/*! ./deviceactivation.component.css */ "./src/app/devicemanagement/deviceactivation/deviceactivation.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], DeviceactivationComponent);
    return DeviceactivationComponent;
}());



/***/ }),

/***/ "./src/app/devicemanagement/devicecommunication/devicecomdetails/devicecomdetails.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/devicemanagement/devicecommunication/devicecomdetails/devicecomdetails.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZW1hbmFnZW1lbnQvZGV2aWNlY29tbXVuaWNhdGlvbi9kZXZpY2Vjb21kZXRhaWxzL2RldmljZWNvbWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/devicemanagement/devicecommunication/devicecomdetails/devicecomdetails.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/devicemanagement/devicecommunication/devicecomdetails/devicecomdetails.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Device Communication Details of <span> {{selectedComDetails.imeiNumber}} </span> | <span> {{selectedComDetails.networkDate}} {{selectedComDetails.networkTime}}</span> </h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Close click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>ID</h5>\n      <h4>{{selectedComDetails.deviceCommunicationId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IMEI No</h5>\n      <h4>{{selectedComDetails.imeiNumber}}</h4>\n    </div>\n  </div>\n  \n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Longitude</h5>\n      <h4>{{selectedComDetails.langitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Latitude</h5>\n      <h4>{{selectedComDetails.latitude}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Engine Status</h5>\n      <h4>{{selectedComDetails.engineStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Ignition Status</h5>\n      <h4>{{selectedComDetails.ignitionStatus}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Network Date</h5>\n      <h4>{{selectedComDetails.networkDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Network Time</h5>\n      <h4>{{selectedComDetails.networkTime}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Prev Langitude</h5>\n      <h4>{{selectedComDetails.prevLangitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Prev Latitude</h5>\n      <h4>{{selectedComDetails.prevLatitude}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Created Date</h5>\n      <h4>{{selectedComDetails.createdDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Location</h5>\n      <h4>{{selectedComDetails.location}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Prev Network Date</h5>\n      <h4>{{selectedComDetails.prevNetworkDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Prev Network Time</h5>\n      <h4>{{selectedComDetails.prevNetworkTime}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Panic Status</h5>\n      <h4>{{selectedComDetails.panicButtonStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Temperature Status</h5>\n      <h4>{{selectedComDetails.tamperStatus}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Status</h5>\n      <h4>{{selectedComDetails.status}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n      <div class=\"col-md-6\">\n        <h5>Is Over Speed</h5>\n        <h4>{{selectedComDetails.isDeviceOverSpeed}}</h4>\n      </div>\n    </div>\n</div>\n<!-- <div class=\"modal-footer\">\n  23456789\n</div> -->"

/***/ }),

/***/ "./src/app/devicemanagement/devicecommunication/devicecomdetails/devicecomdetails.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/devicemanagement/devicecommunication/devicecomdetails/devicecomdetails.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DevicecomdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicecomdetailsComponent", function() { return DevicecomdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_devicecommunication_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/models/devicecommunication.model */ "./src/app/common/models/devicecommunication.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DevicecomdetailsComponent = /** @class */ (function () {
    function DevicecomdetailsComponent(activeModal) {
        this.activeModal = activeModal;
    }
    DevicecomdetailsComponent.prototype.ngOnInit = function () {
        console.log(this.selectedComDetails);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_devicecommunication_model__WEBPACK_IMPORTED_MODULE_2__["DeviceCommunication"])
    ], DevicecomdetailsComponent.prototype, "selectedComDetails", void 0);
    DevicecomdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-devicecomdetails',
            template: __webpack_require__(/*! ./devicecomdetails.component.html */ "./src/app/devicemanagement/devicecommunication/devicecomdetails/devicecomdetails.component.html"),
            styles: [__webpack_require__(/*! ./devicecomdetails.component.css */ "./src/app/devicemanagement/devicecommunication/devicecomdetails/devicecomdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], DevicecomdetailsComponent);
    return DevicecomdetailsComponent;
}());



/***/ }),

/***/ "./src/app/devicemanagement/devicedetails/devicedetails.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/devicemanagement/devicedetails/devicedetails.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZW1hbmFnZW1lbnQvZGV2aWNlZGV0YWlscy9kZXZpY2VkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/devicemanagement/devicedetails/devicedetails.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/devicemanagement/devicedetails/devicedetails.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">{{pageTitle}}</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Close click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>ID</h5>\n      <h4>{{selectedDeviceDetails.id}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IMEI No</h5>\n      <h4>{{selectedDeviceDetails.imeiNumber}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Sim No</h5>\n      <h4>{{selectedDeviceDetails.simNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Ip Address</h5>\n      <h4>{{selectedDeviceDetails.ipAddress}}</h4>\n    </div>\n  </div>\n<div class=\"row\" *ngIf=\"simDetails.length>0\">\n  <div class=\"col-md-12\">\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && editDeviceDetails()\" #f=\"ngForm\" novalidate>\n        <table class=\"grid-table popup m-t-4 text-left\">\n            <thead>\n              <tr>\n                  <th class=\"w-25p\">IMSI No</th>\n                  <th class=\"w-25p\">Provider</th>\n                  <th class=\"w-25p\">Mobile No</th>\n                  <th class=\"w-25p\">Status</th>\n              </tr>\n            </thead>\n            <tbody>              \n              <tr *ngFor=\"let details of simDetails; let idx = index\">\n                  <td class=\"w-25p\">{{details.imsiNumber}}</td>\n                  <td class=\"w-25p\">{{details.telecomProvider}}</td>                  \n                  <td class=\"w-25p\" *ngIf=\"viewDetails == false\">                      \n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mobileNumber[idx]\"  #mobileNumber=\"ngModel\" name=\"mobileNumber{{idx}}\" [ngClass]=\"{ 'is-invalid': f.submitted && mobileNumber.invalid }\" minlength=\"{{ myConstanstsFactory.MOBILEMINLENGTH }}\" maxlength=\"{{ myConstanstsFactory.MOBILEMAXLENGTH }}\" pattern=\"{{ myConstanstsFactory.MOBILEPATTERN }}\" />\n                      <div *ngIf=\"f.submitted && mobileNumber.invalid\" class=\"invalid-feedback\">\n                          <!-- <div *ngIf=\"mobileNumber.errors.required\">Mobile number is required</div> -->\n                          <div *ngIf=\"mobileNumber.errors.minlength\">Mobile number must be 10 characters</div>\n                          <div *ngIf=\"mobileNumber.errors.maxlength\">Mobile number must be 10 characters</div>\n                          <div *ngIf=\"mobileNumber.errors.pattern\">Mobile number must be numeric</div>\n                      </div>\n                  </td>\n                  <td class=\"w-25p\" *ngIf=\"viewDetails == true\">{{details.mobileNumber}}</td>\n                  <td class=\"w-25p\">{{details.status}}</td>\n              </tr>\n            </tbody>\n          </table>\n          <button *ngIf=\"viewDetails == false\" type=\"submit\" class=\"btn-primary m-t-1\">Update</button>\n        </form>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/devicemanagement/devicedetails/devicedetails.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/devicemanagement/devicedetails/devicedetails.component.ts ***!
  \***************************************************************************/
/*! exports provided: DevicedetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicedetailsComponent", function() { return DevicedetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/constants/constants */ "./src/app/common/constants/constants.ts");
/* harmony import */ var _common_models_devicedetails_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/devicedetails.model */ "./src/app/common/models/devicedetails.model.ts");
/* harmony import */ var _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/toaster.service */ "./src/app/common/services/toaster.service.ts");
/* harmony import */ var _common_services_devicemanagement_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/devicemanagement.api */ "./src/app/common/services/devicemanagement.api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DevicedetailsComponent = /** @class */ (function () {
    function DevicedetailsComponent(activeModal, toasterService, devicemanagementApiService) {
        this.activeModal = activeModal;
        this.toasterService = toasterService;
        this.devicemanagementApiService = devicemanagementApiService;
        this.viewDetails = true;
        this.simDetails = [];
        this.mobileNumber = [];
        this.editedSimDetails = [];
        this.myConstanstsFactory = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"];
        this.primaryProvider = '';
        this.secondaryProvider = '';
    }
    DevicedetailsComponent.prototype.ngOnInit = function () {
        this.simDetails = this.selectedDeviceDetails.simDetails;
        this.viewDetails = !(this.selectedDeviceDetails.selectedEvent === 'edit');
        this.pageTitle = this.viewDetails ? 'Device Details of ' : 'Edit Device Details of ';
        this.pageTitle += this.selectedDeviceDetails.imeiNumber;
        this.mobileNumber = !this.viewDetails ? this.simDetails.slice() : this.mobileNumber;
    };
    DevicedetailsComponent.prototype.editDeviceDetails = function () {
        var _this = this;
        this.editedSimDetails = [];
        // we can write Array filter to remove all the null values please check it eg: list.filter((obj) => obj )
        for (var i = 0; i < this.mobileNumber.length; i++) {
            if (this.mobileNumber[i] !== null) {
                this.simDetails[i].mobileNumber = this.mobileNumber[i];
                this.simDetails[i].imeiNumber = this.selectedDeviceDetails.imeiNumber;
            }
        }
        this.devicemanagementApiService.updateDeviceDetails(this.simDetails)
            .subscribe(function (_data) {
            _this.activeModal.close('refreshContent');
            _this.toasterService.showSuccess('bottom-right', 'Successfully updated the device details.');
        }, function (_error) {
            _this.activeModal.close('Close click');
            _this.toasterService.showError('bottom-right', 'ERROR: Unable to update the device details.');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_devicedetails_model__WEBPACK_IMPORTED_MODULE_3__["DeviceDetails"])
    ], DevicedetailsComponent.prototype, "selectedDeviceDetails", void 0);
    DevicedetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-devicedetails',
            template: __webpack_require__(/*! ./devicedetails.component.html */ "./src/app/devicemanagement/devicedetails/devicedetails.component.html"),
            styles: [__webpack_require__(/*! ./devicedetails.component.css */ "./src/app/devicemanagement/devicedetails/devicedetails.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _common_services_devicemanagement_api__WEBPACK_IMPORTED_MODULE_5__["DeviceManagementServiceApi"]])
    ], DevicedetailsComponent);
    return DevicedetailsComponent;
}());



/***/ }),

/***/ "./src/app/devicemanagement/packetdetails/packetdetails.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/devicemanagement/packetdetails/packetdetails.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZW1hbmFnZW1lbnQvcGFja2V0ZGV0YWlscy9wYWNrZXRkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/devicemanagement/packetdetails/packetdetails.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/devicemanagement/packetdetails/packetdetails.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">{{pageTitle}} Packet Details</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Close click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body row-m-b\">\n  <div class=\"row\" *ngIf=\"noData\">\n    <div class=\"col-md-6\" *ngIf=\"packetDetails.packetName == 'Activation'\">\n      <h5>Activation ID</h5>\n      <h4>{{packetData.activationPacketDataId}}</h4>\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"packetDetails.packetName !== 'Activation'\">\n      <h5>Health ID</h5>\n      <h4>{{packetData.healthPacketDataId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Header</h5>\n      <h4>{{packetData.header}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Random Code</h5>\n      <h4>{{packetData.randomCode}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Vendor ID</h5>\n      <h4>{{packetData.vendorId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Firmware Version</h5>\n      <h4>{{packetData.firmwareVersion}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IMEI No</h5>\n      <h4>{{packetData.imeiNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Alter ID</h5>\n      <h4>{{packetData.alertId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Latitude</h5>\n      <h4>{{packetData.latitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Latitude Direction</h5>\n      <h4>{{packetData.latitudeDirection}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Longnitude</h5>\n      <h4>{{packetData.longnitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Longnitude Direction</h5>\n      <h4>{{packetData.longnitudeDirection}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>GPS Fix</h5>\n      <h4>{{packetData.gpsFix}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Date</h5>\n      <h4>{{packetData.date}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Time</h5>\n      <h4>{{packetData.time}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Heading</h5>\n      <h4>{{packetData.heading}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Speed</h5>\n      <h4>{{packetData.speed}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>GSM Strength</h5>\n      <h4>{{packetData.gsmStrength}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Country Code</h5>\n      <h4>{{packetData.countryCode}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Network Code</h5>\n      <h4>{{packetData.networkCode}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n        <h5>LAC</h5>\n        <h4>{{packetData.lac}}</h4>\n      </div>\n      <div class=\"col-md-6\">\n        <h5>Main Power</h5>\n        <h4>{{packetData.mainPower}}</h4>\n      </div>\n      <div class=\"col-md-6\">\n          <h5>Ignition Status</h5>\n          <h4>{{packetData.ignStatus}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>Battery Voltage</h5>\n          <h4>{{packetData.batteryVoltage}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n            <h5>Frame Number</h5>\n            <h4>{{packetData.frameNumber}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>Vehicle Mode</h5>\n            <h4>{{packetData.vehicleMode}}</h4>\n          </div>\n          <div class=\"col-md-6\"  *ngIf=\"packetDetails.packetName == 'Activation'\">\n              <h5>Ntwork Date</h5>\n              <h4>{{packetData.networkDate}}</h4>\n            </div>\n            <div class=\"col-md-6\"  *ngIf=\"packetDetails.packetName == 'Activation'\">\n              <h5>Network Time</h5>\n              <h4>{{packetData.networkTime}}</h4>\n            </div>\n  </div>\n  <div *ngIf=\"!noData\">\n      <div class=\"grid text-center text-red-medium\">\n        <h6>No Data Found</h6>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/devicemanagement/packetdetails/packetdetails.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/devicemanagement/packetdetails/packetdetails.component.ts ***!
  \***************************************************************************/
/*! exports provided: PacketdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacketdetailsComponent", function() { return PacketdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_services_devicemanagement_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/devicemanagement.api */ "./src/app/common/services/devicemanagement.api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PacketdetailsComponent = /** @class */ (function () {
    function PacketdetailsComponent(activeModal, devicemanagementApiService) {
        this.activeModal = activeModal;
        this.devicemanagementApiService = devicemanagementApiService;
        this.noData = false;
    }
    PacketdetailsComponent.prototype.ngOnInit = function () {
        this.pageTitle = this.packetDetails.packetName;
        this.getAllPacketDetails();
    };
    PacketdetailsComponent.prototype.getAllPacketDetails = function () {
        var _this = this;
        this.devicemanagementApiService.getPackedDetails(this.packetDetails.packetType, this.packetDetails.imeiNumber)
            .subscribe(function (data) {
            _this.packetData = data.content;
            _this.noData = (_this.packetData.length > 0);
        }, function (error) {
            console.log('error', error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PacketdetailsComponent.prototype, "packetDetails", void 0);
    PacketdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-packetdetails',
            template: __webpack_require__(/*! ./packetdetails.component.html */ "./src/app/devicemanagement/packetdetails/packetdetails.component.html"),
            styles: [__webpack_require__(/*! ./packetdetails.component.css */ "./src/app/devicemanagement/packetdetails/packetdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _common_services_devicemanagement_api__WEBPACK_IMPORTED_MODULE_2__["DeviceManagementServiceApi"]])
    ], PacketdetailsComponent);
    return PacketdetailsComponent;
}());



/***/ }),

/***/ "./src/app/emergencymonitoring/emergencydetails/emergencydetails.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/emergencymonitoring/emergencydetails/emergencydetails.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtZXJnZW5jeW1vbml0b3JpbmcvZW1lcmdlbmN5ZGV0YWlscy9lbWVyZ2VuY3lkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/emergencymonitoring/emergencydetails/emergencydetails.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/emergencymonitoring/emergencydetails/emergencydetails.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Emergency Monitoring Details of <span>{{selectedEmergencydata.imeiNumber}} </span> | <span> {{selectedEmergencydata.networkDate}} {{selectedEmergencydata.networkTime}} </span></h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Close click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>ID</h5>\n      <h4>{{selectedEmergencydata.ebpPacketDataId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IMEI No</h5>\n      <h4>{{selectedEmergencydata.imeiNumber}}</h4>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>Vehicle No</h5>\n      <h4>{{selectedEmergencydata.vehicleRegNo}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Reply No</h5>\n      <h4>{{selectedEmergencydata.replyNumber}}</h4>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>Latitude</h5>\n      <h4>{{selectedEmergencydata.latitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Latitude Direction</h5>\n      <h4>{{selectedEmergencydata.latitudeDirection}}</h4>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>Longitude</h5>\n      <h4>{{selectedEmergencydata.longitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Longitude Direction</h5>\n      <h4>{{selectedEmergencydata.longitudeDirection}}</h4>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>Distance</h5>\n      <h4>{{selectedEmergencydata.distance}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Speed</h5>\n      <h4>{{selectedEmergencydata.speed}}</h4>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n        <h5>Network Date</h5>\n        <h4>{{selectedEmergencydata.networkDate}} {{selectedEmergencydata.networkTime}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Packet Status</h5>\n      <h4>{{selectedEmergencydata.packetStaus}}</h4>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\" >\n      <h5>Altitude</h5>\n      <h4>{{selectedEmergencydata.altitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n        <h5>GPS Validity</h5>\n        <h4>{{selectedEmergencydata.gpsValidity}}</h4>\n    </div>    \n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\" *ngIf=\"selectedEmergencydata.checksum\">\n        <h5>Checksum</h5>\n        <h4>{{selectedEmergencydata.checksum}}</h4>\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"selectedEmergencydata.endCharacter\">\n      <h5>End Character</h5>\n      <h4>{{selectedEmergencydata.endCharacter}}</h4>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>Provider</h5>\n      <h4>{{selectedEmergencydata.provider}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Created Date</h5>\n      <h4>{{selectedEmergencydata.createdDate}}</h4>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n      \n      <div class=\"col-md-6\" *ngIf=\"selectedEmergencydata.packetType\">\n          <h5>Packet Type</h5>\n          <h4>{{selectedEmergencydata.packetType}}</h4>\n        </div>\n      <!-- <div class=\"col-md-6\">\n        <h5>Network Time</h5>\n        <h4></h4>\n      </div> -->\n    </div>\n  \n</div>\n<!-- <div class=\"modal-footer\">\n  23456789\n</div> -->"

/***/ }),

/***/ "./src/app/emergencymonitoring/emergencydetails/emergencydetails.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/emergencymonitoring/emergencydetails/emergencydetails.component.ts ***!
  \************************************************************************************/
/*! exports provided: EmergencydetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencydetailsComponent", function() { return EmergencydetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_emergencymonitoring_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/models/emergencymonitoring.model */ "./src/app/common/models/emergencymonitoring.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmergencydetailsComponent = /** @class */ (function () {
    function EmergencydetailsComponent(activeModal) {
        this.activeModal = activeModal;
    }
    EmergencydetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_emergencymonitoring_model__WEBPACK_IMPORTED_MODULE_2__["EmergencynMonitoring"])
    ], EmergencydetailsComponent.prototype, "selectedEmergencydata", void 0);
    EmergencydetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emergencydetails',
            template: __webpack_require__(/*! ./emergencydetails.component.html */ "./src/app/emergencymonitoring/emergencydetails/emergencydetails.component.html"),
            styles: [__webpack_require__(/*! ./emergencydetails.component.css */ "./src/app/emergencymonitoring/emergencydetails/emergencydetails.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], EmergencydetailsComponent);
    return EmergencydetailsComponent;
}());



/***/ }),

/***/ "./src/app/healthmonitoring/healthdetails/healthdetails.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/healthmonitoring/healthdetails/healthdetails.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aG1vbml0b3JpbmcvaGVhbHRoZGV0YWlscy9oZWFsdGhkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/healthmonitoring/healthdetails/healthdetails.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/healthmonitoring/healthdetails/healthdetails.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Health Monitoring Details of <span>{{selectedHealthDetails.imeiNumber}}</span> | <span>{{selectedHealthDetails.networkDate}} {{selectedHealthDetails.networkTime}}</span></h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Close click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>ID</h5>\n      <h4>{{selectedHealthDetails.hmpPacketDataId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IMEI No</h5>\n      <h4>{{selectedHealthDetails.imeiNumber}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Vendor ID</h5>\n      <h4>{{selectedHealthDetails.vendorId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Firmware Version</h5>\n      <h4>{{selectedHealthDetails.firmwareVersion}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Analog IO Status</h5>\n      <h4>{{selectedHealthDetails.analogIOStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Digital IO Status</h5>\n      <h4>{{selectedHealthDetails.digitalIOStatus}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Battery Percentage</h5>\n      <h4>{{selectedHealthDetails.batteryPercentage}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Memory Percentage</h5>\n      <h4>{{selectedHealthDetails.memoryPercentage}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Network Date</h5>\n      <h4>{{selectedHealthDetails.networkDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Network Time</h5>\n      <h4>{{selectedHealthDetails.networkTime}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Low Battery Thr Value</h5>\n      <h4>{{selectedHealthDetails.lowBatteryThrValue}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>End Of Packet</h5>\n      <h4>{{selectedHealthDetails.endOfPacket}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Data Update ON</h5>\n      <h4>{{selectedHealthDetails.dataUpdateON}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Data Update OFF</h5>\n      <h4>{{selectedHealthDetails.dataUpdateOFF}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Created Date</h5>\n      <h4>{{selectedHealthDetails.createdDate}}</h4>\n    </div>\n  </div>\n</div>\n<!-- <div class=\"modal-footer\">\n  23456789\n</div> -->"

/***/ }),

/***/ "./src/app/healthmonitoring/healthdetails/healthdetails.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/healthmonitoring/healthdetails/healthdetails.component.ts ***!
  \***************************************************************************/
/*! exports provided: HealthdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthdetailsComponent", function() { return HealthdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_healthmonitoring_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/models/healthmonitoring.model */ "./src/app/common/models/healthmonitoring.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HealthdetailsComponent = /** @class */ (function () {
    function HealthdetailsComponent(activeModal) {
        this.activeModal = activeModal;
    }
    HealthdetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_healthmonitoring_model__WEBPACK_IMPORTED_MODULE_2__["HealthnMonitoring"])
    ], HealthdetailsComponent.prototype, "selectedHealthDetails", void 0);
    HealthdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-healthdetails',
            template: __webpack_require__(/*! ./healthdetails.component.html */ "./src/app/healthmonitoring/healthdetails/healthdetails.component.html"),
            styles: [__webpack_require__(/*! ./healthdetails.component.css */ "./src/app/healthmonitoring/healthdetails/healthdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], HealthdetailsComponent);
    return HealthdetailsComponent;
}());



/***/ }),

/***/ "./src/app/locationmonitoring/locationdetails/locationdetails.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/locationmonitoring/locationdetails/locationdetails.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9ubW9uaXRvcmluZy9sb2NhdGlvbmRldGFpbHMvbG9jYXRpb25kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/locationmonitoring/locationdetails/locationdetails.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/locationmonitoring/locationdetails/locationdetails.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Location Details of <span> {{selectedLocationDetails.imei}} </span>|<span> {{selectedLocationDetails.networkDate}} {{selectedLocationDetails.networkTime}}</span></h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Close click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>ID</h5>\n      <h4>{{selectedLocationDetails.lmpPacketDataId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IMEI No</h5>\n      <h4>{{selectedLocationDetails.imei}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Vehicle No</h5>\n      <h4>{{selectedLocationDetails.vehicleRegNo}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Cell ID</h5>\n      <h4>{{selectedLocationDetails.cellId}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Vendor ID</h5>\n      <h4>{{selectedLocationDetails.vendorId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Altitude</h5>\n      <h4>{{selectedLocationDetails.altitude}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Digital Input Status</h5>\n      <h4>{{selectedLocationDetails.digitalInputStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Digital Output Status</h5>\n      <h4>{{selectedLocationDetails.digitalOutputStatus}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Firmware Version</h5>\n      <h4>{{selectedLocationDetails.firmwareVersion}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Frame Number</h5>\n      <h4>{{selectedLocationDetails.frameNumber}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Latitude</h5>\n      <h4>{{selectedLocationDetails.latitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Latitude Direction</h5>\n      <h4>{{selectedLocationDetails.latitudeDirection}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Longitude</h5>\n      <h4>{{selectedLocationDetails.longitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Longitude Direction</h5>\n      <h4>{{selectedLocationDetails.longitudeDirection}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>GPS Fix</h5>\n      <h4>{{selectedLocationDetails.gpsFix}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>GSM Signal Strength</h5>\n      <h4>{{selectedLocationDetails.gsmSignalStrength}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>HDoP</h5>\n      <h4>{{selectedLocationDetails.hdop}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Heading</h5>\n      <h4>{{selectedLocationDetails.heading}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Emergency Status</h5>\n      <h4>{{selectedLocationDetails.emergencyStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Ignition</h5>\n      <h4>{{selectedLocationDetails.ignition}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Internal Battery Voltage %</h5>\n      <h4>{{selectedLocationDetails.internalBatteryVoltage}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>No Of Satellites</h5>\n      <h4>{{selectedLocationDetails.noOfSatellites}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Main Input Voltage</h5>\n      <h4>{{selectedLocationDetails.mainInputVoltage}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Main Power Status</h5>\n      <h4>{{selectedLocationDetails.mainPowerStatus}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Network Operator Name</h5>\n      <h4>{{selectedLocationDetails.networkOperatorName}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>NMR</h5>\n      <h4>{{selectedLocationDetails.nmr}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>LAC</h5>\n      <h4>{{selectedLocationDetails.lac}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>MCC</h5>\n      <h4>{{selectedLocationDetails.mcc}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Packet Type</h5>\n      <h4>{{selectedLocationDetails.packetType}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Packet Status</h5>\n      <h4>{{selectedLocationDetails.packetStatus}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Network Date</h5>\n      <h4>{{selectedLocationDetails.networkDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Network Time</h5>\n      <h4>{{selectedLocationDetails.networkTime}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>PDOP</h5>\n      <h4>{{selectedLocationDetails.pdop}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Speed</h5>\n      <h4>{{selectedLocationDetails.speed}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Date</h5>\n      <h4>{{selectedLocationDetails.date}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Time</h5>\n      <h4>{{selectedLocationDetails.time}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-2\">\n    <div class=\"col-md-6\">\n      <h5>Tamper Alert</h5>\n      <h4>{{selectedLocationDetails.tamperAlert}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Created Date</h5>\n      <h4>{{selectedLocationDetails.createdDate}}</h4>\n    </div>\n  </div>\n  <!-- <div class=\"modal-footer\">\n  23456789\n</div> -->"

/***/ }),

/***/ "./src/app/locationmonitoring/locationdetails/locationdetails.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/locationmonitoring/locationdetails/locationdetails.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LocationdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationdetailsComponent", function() { return LocationdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_locationmonitoring_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/models/locationmonitoring.model */ "./src/app/common/models/locationmonitoring.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationdetailsComponent = /** @class */ (function () {
    function LocationdetailsComponent(activeModal) {
        this.activeModal = activeModal;
    }
    LocationdetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_locationmonitoring_model__WEBPACK_IMPORTED_MODULE_2__["LocationMonitoring"])
    ], LocationdetailsComponent.prototype, "selectedLocationDetails", void 0);
    LocationdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locationdetails',
            template: __webpack_require__(/*! ./locationdetails.component.html */ "./src/app/locationmonitoring/locationdetails/locationdetails.component.html"),
            styles: [__webpack_require__(/*! ./locationdetails.component.css */ "./src/app/locationmonitoring/locationdetails/locationdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], LocationdetailsComponent);
    return LocationdetailsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-main\">\n  <div class=\"row login-height\">\n    <div class=\"col-md-7\">\n      <div class=\"login-banner img-fluid\">\n      </div>\n    </div>\n    <!-- <ng-http-loader backgroundColor=\"#ff0000\" [spinner]=\"spinkit.skChasingDots\"></ng-http-loader> -->\n    <div class=\"col-md-5\">\n      <div class=\"row\">\n        <div class=\"login-logo\">\n          <img style=\"float:right;\" src=\"assets/images/SVG/Otsi-ITS_logo.svg\">\n        </div>\n        <form class=\"form-horizontal login-block\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n          <div class=\"form-group\">\n            <div class=\"login-leftline login-content\">\n              <h3>LOGIN</h3>\n            </div>\n            <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\" class=\"form-control login-form\" placeholder=\"USER NAME\" formControlName=\"userName\">\n            <div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.userName.errors.required\">User name is required</div>\n            </div>\n            <input type=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" class=\"form-control login-form\" placeholder=\"PASSWORD\" formControlName=\"password\">\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            </div>\n            <div class=\"row p-l-3 \">\n                <div class=\"form-group m-t-2\">\n                    <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n                </div>\n              <!-- <button (click)=\"login();\" class=\"btn-primary\">Login</button> -->\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <!-- <footer class=\"footer\">\n    <div class=\" footer-details\">\n      <span>Developed By</span>\n      <img src=\"assets/images/logo_otsi.png\">\n    </div>\n  </footer> -->\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
/* harmony import */ var _authgaurd_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../authgaurd/auth.service */ "./src/app/authgaurd/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, httpClient, spinner, auth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.httpClient = httpClient;
        this.spinner = spinner;
        this.auth = auth;
        this.submitted = false;
        this.spinkit = ng_http_loader__WEBPACK_IMPORTED_MODULE_5__["Spinkit"];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'Basic ' + window.btoa('abhaya-app' + ':' + 'abhaya-secret')
            })
        };
    }
    // types: String[];
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('userdetails');
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('UserType'),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        //Validations check
        this.loginForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loginModel = this.loginForm.value;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + "/oauth/token";
        this.spinner.show();
        this.httpClient.post(url + "?username=" + this.loginModel.userName + "&password=" + this.loginModel.password + "&grant_type=password", {}, this.httpOptions).subscribe(function (data) {
            _this.auth.sendToken('Bearer ' + data.access_token);
            _this.getUserDetails();
        }, function (error) {
            console.log('error', error);
            _this.spinner.hide();
        });
    };
    LoginComponent.prototype.getUserDetails = function () {
        var _this = this;
        var headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': this.auth.getToken()
            })
        };
        this.httpClient.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/readUser", headers).subscribe(function (userDetailsdata) {
            localStorage.setItem('userdetails', JSON.stringify(userDetailsdata));
            if (userDetailsdata != null && userDetailsdata.isEnabled) {
                _this.router.navigate(['/dashboard']);
                _this.spinner.hide();
            }
            else {
                _this.loginErrorMsg = 'Account is disabled, Please contact administrator.';
                _this.spinner.hide();
            }
        }, function (error) {
            _this.loginErrorMsg = 'Unable to fetch the user details.';
            console.log('error', error);
            _this.spinner.hide();
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ng_http_loader__WEBPACK_IMPORTED_MODULE_5__["SpinnerVisibilityService"],
            _authgaurd_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/rawdata/rawdatadetails/rawdatadetails.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/rawdata/rawdatadetails/rawdatadetails.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jhd2RhdGEvcmF3ZGF0YWRldGFpbHMvcmF3ZGF0YWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/rawdata/rawdatadetails/rawdatadetails.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/rawdata/rawdatadetails/rawdatadetails.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Raw Data Details of <span> {{selectedrawdata.imeiNumber}} </span>| <span>{{selectedrawdata.networkDate}} {{selectedrawdata.networkTime}}</span></h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Close click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>ID No</h5>\n      <h4>{{selectedrawdata.rawDataId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IMEI No</h5>\n      <h4>{{selectedrawdata.imeiNumber}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-4\">\n    <div class=\"col-md-6\">\n      <h5>Vehicle No</h5>\n      <h4>{{selectedrawdata.vehicleRegNo}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>CVP Type</h5>\n      <h4>{{selectedrawdata.cvpType}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-4\">\n    <div class=\"col-md-6\">\n      <h5>Network Date</h5>\n      <h4>{{selectedrawdata.networkDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Network Time</h5>\n      <h4>{{selectedrawdata.networkTime}}</h4>\n    </div>\n    <div class=\"col-md-6 p-t-4\">\n      <h5>Packet Status</h5>\n      <h4>{{selectedrawdata.packetStatus}}</h4>\n    </div>\n  </div>\n  <div class=\"row p-t-4\">\n    <div class=\"col-md-12\">\n      <h5>Raw Data</h5>\n      <h4>{{selectedrawdata.rawData}}</h4>\n    </div>\n  </div>\n</div>\n<!-- <div class=\"modal-footer\">\n  23456789\n</div> -->"

/***/ }),

/***/ "./src/app/rawdata/rawdatadetails/rawdatadetails.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/rawdata/rawdatadetails/rawdatadetails.component.ts ***!
  \********************************************************************/
/*! exports provided: RawdatadetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawdatadetailsComponent", function() { return RawdatadetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_rawdata_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/models/rawdata.model */ "./src/app/common/models/rawdata.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RawdatadetailsComponent = /** @class */ (function () {
    function RawdatadetailsComponent(activeModal) {
        this.activeModal = activeModal;
    }
    RawdatadetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_rawdata_model__WEBPACK_IMPORTED_MODULE_2__["RawData"])
    ], RawdatadetailsComponent.prototype, "selectedrawdata", void 0);
    RawdatadetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rawdatadetails',
            template: __webpack_require__(/*! ./rawdatadetails.component.html */ "./src/app/rawdata/rawdatadetails/rawdatadetails.component.html"),
            styles: [__webpack_require__(/*! ./rawdatadetails.component.css */ "./src/app/rawdata/rawdatadetails/rawdatadetails.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], RawdatadetailsComponent);
    return RawdatadetailsComponent;
}());



/***/ }),

/***/ "./src/app/systemmanagement/addeditsystemprop/addeditsystemprop.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/systemmanagement/addeditsystemprop/addeditsystemprop.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbW1hbmFnZW1lbnQvYWRkZWRpdHN5c3RlbXByb3AvYWRkZWRpdHN5c3RlbXByb3AuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/systemmanagement/addeditsystemprop/addeditsystemprop.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/systemmanagement/addeditsystemprop/addeditsystemprop.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{pageTitle}}</h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Close click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <form #systempropertiesForm=\"ngForm\" name=\"form\" novalidate (ngSubmit)=\"systempropertiesForm.valid && saveSystemProperties()\">\n        <div class=\"row\">\n          <div class=\"col-md-6 form-group\" [class.has-error]=\"systempropertiesForm.submitted && propertyNamecontrol.invalid\">\n            <label class=\"required\">Property Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addeditsystemprop.propertyName\" name=\"propertyName\" required #propertyNamecontrol=\"ngModel\">\n            <span class=\"help-block\" *ngIf=\"systempropertiesForm.submitted && propertyNamecontrol.invalid\">\n                Property name is required</span>\n          </div>          \n          <div class=\"col-md-6 form-group\" [class.has-error]=\"systempropertiesForm.submitted && propertyValuecontrol.invalid\"> \n            <label class=\"required\">Property Value</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addeditsystemprop.propertyValue\" name=\"propertyValue\" required #propertyValuecontrol=\"ngModel\">            \n          <span class=\"help-block\" *ngIf=\"systempropertiesForm.submitted && propertyValuecontrol.invalid\">\n              Property value is required</span>\n          </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n              <button type=\"submit\" class=\"btn-primary m-t-1\">SUBMIT</button>\n            </div>\n          </div>\n      </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/systemmanagement/addeditsystemprop/addeditsystemprop.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/systemmanagement/addeditsystemprop/addeditsystemprop.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddeditsystempropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditsystempropComponent", function() { return AddeditsystempropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_systemmanagement_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/models/systemmanagement.model */ "./src/app/common/models/systemmanagement.model.ts");
/* harmony import */ var _common_services_systemmanagement_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/systemmanagement.api */ "./src/app/common/services/systemmanagement.api.ts");
/* harmony import */ var _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/toaster.service */ "./src/app/common/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddeditsystempropComponent = /** @class */ (function () {
    function AddeditsystempropComponent(activeModal, systemPropertiesApi, toasterService) {
        this.activeModal = activeModal;
        this.systemPropertiesApi = systemPropertiesApi;
        this.toasterService = toasterService;
        this.addeditsystemprop = new _common_models_systemmanagement_model__WEBPACK_IMPORTED_MODULE_2__["SystemManagement"]();
        this.pageTitle = 'Add System Properties';
    }
    AddeditsystempropComponent.prototype.ngOnInit = function () {
        if (this.systemPropertiesDetails !== undefined) {
            this.addeditsystemprop = this.systemPropertiesDetails;
            this.pageTitle = 'Edit System Properties';
        }
    };
    AddeditsystempropComponent.prototype.saveSystemProperties = function () {
        var _this = this;
        console.log(this.addeditsystemprop);
        this.systemPropertiesApi.addeditsystemprop(JSON.stringify(this.addeditsystemprop))
            .subscribe(function (_data) {
            _this.activeModal.close('refreshContent');
            _this.toasterService.showSuccess('bottom-right', 'System Properties has been successfully closed ');
        }, function (_error) {
            _this.activeModal.close();
            _this.activeModal.close('Close click');
            _this.toasterService.showError('bottom-right', 'ERROR: Unable to close the System Properties.');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_systemmanagement_model__WEBPACK_IMPORTED_MODULE_2__["SystemManagement"])
    ], AddeditsystempropComponent.prototype, "systemPropertiesDetails", void 0);
    AddeditsystempropComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addeditsystemprop',
            template: __webpack_require__(/*! ./addeditsystemprop.component.html */ "./src/app/systemmanagement/addeditsystemprop/addeditsystemprop.component.html"),
            styles: [__webpack_require__(/*! ./addeditsystemprop.component.css */ "./src/app/systemmanagement/addeditsystemprop/addeditsystemprop.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _common_services_systemmanagement_api__WEBPACK_IMPORTED_MODULE_3__["SystemManagementServiceApi"],
            _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]])
    ], AddeditsystempropComponent);
    return AddeditsystempropComponent;
}());



/***/ }),

/***/ "./src/app/usermanagement/userdetails/userdetails.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/usermanagement/userdetails/userdetails.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJtYW5hZ2VtZW50L3VzZXJkZXRhaWxzL3VzZXJkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/usermanagement/userdetails/userdetails.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/usermanagement/userdetails/userdetails.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\">User Details</h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Close click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <h5>ID No</h5>\n            <h4>{{user.userId}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n            <h5>User Name</h5>\n            <h4>{{user.username}}</h4>\n        </div>\n    </div>\n    <div class=\"row p-t-4\">\n        <div class=\"col-md-6\">\n            <h5>First Name</h5>\n            <h4>{{user.firstName}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n            <h5>Last Name</h5>\n            <h4>{{user.lastName}}</h4>\n        </div>\n    </div>\n    <div class=\"row p-t-4\">\n        <div class=\"col-md-6\">\n            <h5>Mobile No</h5>\n            <h4>{{user.mobileNumber}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n            <h5>Email ID</h5>\n            <h4>{{user.emailId}}</h4>\n        </div>\n    </div>\n    <div class=\"row p-t-4\">\n        <div class=\"col-md-6\">\n            <h5>Created Date</h5>\n            <h4>{{user.createdDate}}</h4>\n        </div>\n        <!-- <div class=\"col-md-6\">\n      <h5>Enabled</h5>\n      <h4>{{user.isEnabled}}</h4>\n    </div> -->\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/usermanagement/userdetails/userdetails.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/usermanagement/userdetails/userdetails.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailsComponent", function() { return UserdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/models/user.model */ "./src/app/common/models/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserdetailsComponent = /** @class */ (function () {
    function UserdetailsComponent(activeModal) {
        this.activeModal = activeModal;
    }
    UserdetailsComponent.prototype.ngOnInit = function () {
        console.log(this.user);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], UserdetailsComponent.prototype, "user", void 0);
    UserdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userdetails',
            template: __webpack_require__(/*! ./userdetails.component.html */ "./src/app/usermanagement/userdetails/userdetails.component.html"),
            styles: [__webpack_require__(/*! ./userdetails.component.css */ "./src/app/usermanagement/userdetails/userdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], UserdetailsComponent);
    return UserdetailsComponent;
}());



/***/ }),

/***/ "./src/app/vehiclemanagement/addeditvehicle/addeditvehicle.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/vehiclemanagement/addeditvehicle/addeditvehicle.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGVtYW5hZ2VtZW50L2FkZGVkaXR2ZWhpY2xlL2FkZGVkaXR2ZWhpY2xlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/vehiclemanagement/addeditvehicle/addeditvehicle.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/vehiclemanagement/addeditvehicle/addeditvehicle.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">{{pageTitle}}</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Close click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row\" *ngIf=\"!viewdata\">\n    <form #addeditVehicleForm=\"ngForm\" name=\"form\" novalidate (ngSubmit)=\"addeditVehicleForm.valid && saveVehicle(addeditvehicle)\">\n    <div class=\"row m-a-0\">\n      <div class=\"col-md-4 form-group\" [class.has-error]=\"addeditVehicleForm.submitted && chassisNumbercontrol.invalid\" >\n        <label class=\"required\">Chassis Number</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addeditvehicle.chassisNumber\" name=\"chassisNumber\" required #chassisNumbercontrol=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"addeditVehicleForm.submitted && chassisNumbercontrol.invalid\">\n            Chassis number is required</span>\n      </div>\n      <div class=\"col-md-4 form-group\" [class.has-error]=\"addeditVehicleForm.submitted && engineNumbercontrol.invalid\" >\n        <label class=\"required\">Engine Number</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addeditvehicle.engineNumber\" name=\"engineNumber\" required #engineNumbercontrol=\"ngModel\" >\n        <span class=\"help-block\" *ngIf=\"addeditVehicleForm.submitted && engineNumbercontrol.invalid\">\n            Engine number is required</span>\n      </div>\n      <div class=\"col-md-4 form-group\" [class.has-error]=\"addeditVehicleForm.submitted && vehicleMakecontrol.invalid\" >\n        <label class=\"required\">Vehicle Make</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addeditvehicle.vehicleMake\" name=\"vehicleMake\" required #vehicleMakecontrol=\"ngModel\" >\n        <span class=\"help-block\" *ngIf=\"addeditVehicleForm.submitted && vehicleMakecontrol.invalid\">\n            Vehicle Make is required</span>\n      </div>\n      <div class=\"col-md-4 form-group\" [class.has-error]=\"addeditVehicleForm.submitted && vehicleModelcontrol.invalid\" >\n        <label class=\"required\">Vehicle Model</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addeditvehicle.vehicleModel\" name=\"vehicleModel\" required #vehicleModelcontrol=\"ngModel\" >\n        <span class=\"help-block\" *ngIf=\"addeditVehicleForm.submitted && vehicleModelcontrol.invalid\">\n            Vehicle Model is required</span>\n      </div>\n      <div class=\"col-md-4 form-group\" [class.has-error]=\"addeditVehicleForm.submitted && vehicleRegNumbercontrol.invalid\" >\n        <label class=\"required\">Vehicle Registration No</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addeditvehicle.vehicleRegNumber\"  name=\"vehicleRegNumber\" required #vehicleRegNumbercontrol=\"ngModel\" >\n        <span class=\"help-block\" *ngIf=\"addeditVehicleForm.submitted && vehicleRegNumbercontrol.invalid\">\n            Vehicle Registration No is required</span>\n      </div>\n      <div class=\"col-md-4 form-group\" [class.has-error]=\"addeditVehicleForm.submitted && mobileNumber.invalid\" >\n        <label class=\"required\">Mobile Number</label>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"addeditvehicle.mobileNumber\"  name=\"mobileNumber\" required #mobileNumber=\"ngModel\" >\n        <span class=\"help-block\" *ngIf=\"addeditVehicleForm.submitted && mobileNumber.invalid\">\n            Mobile Number is No is required</span>\n      </div>\n    </div>\n\n    <div class=\"row m-a-0\">\n      <div class=\"col-md-6 form-group\">\n        <button type=\"submit\" class=\"btn-primary m-t-1\">SUBMIT</button>\n      </div>\n    </div>\n  </form>\n  </div>\n\n\n  <div class=\"row\" *ngIf=\"viewdata\">\n    \n      <div class=\"row m-a-0\">\n        <div class=\"col-md-6\">\n          <h5>ID No</h5>\n          <h4>{{selectVehicleDetails.vehicleId}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>Chassis Number</h5>\n          <h4>{{selectVehicleDetails.chassisNumber}}</h4>\n        </div>\n        <div class=\"col-md-6 p-t-2\">\n          <h5>Engine Number</h5>\n          <h4>{{selectVehicleDetails.engineNumber}}</h4>\n        </div>\n        <div class=\"col-md-6 p-t-2\">\n          <h5>Vehicle Make</h5>\n          <h4>{{selectVehicleDetails.vehicleMake}}</h4>\n        </div>\n        <div class=\"col-md-6 p-t-2\">\n          <h5>Vehicle Model</h5>\n          <h4>{{selectVehicleDetails.vehicleModel}}</h4>\n        </div>\n        <div class=\"col-md-6 p-t-2\">\n          <h5>Vehicle Registration Number</h5>\n          <h4>{{selectVehicleDetails.vehicleRegNumber}}</h4>\n        </div>\n        <div class=\"col-md-6 p-t-2\">\n          <h5>Mobile Number</h5>\n          <h4>{{selectVehicleDetails.mobileNumber}}</h4>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/vehiclemanagement/addeditvehicle/addeditvehicle.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/vehiclemanagement/addeditvehicle/addeditvehicle.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddeditvehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditvehicleComponent", function() { return AddeditvehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_common_models_vehicle_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/models/vehicle.model */ "./src/app/common/models/vehicle.model.ts");
/* harmony import */ var _common_services_vehiclemanagement_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/vehiclemanagement.api */ "./src/app/common/services/vehiclemanagement.api.ts");
/* harmony import */ var _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/toaster.service */ "./src/app/common/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddeditvehicleComponent = /** @class */ (function () {
    function AddeditvehicleComponent(activeModal, vehicleDetailsApi, toasterService) {
        this.activeModal = activeModal;
        this.vehicleDetailsApi = vehicleDetailsApi;
        this.toasterService = toasterService;
        this.viewdata = false;
        this.pageTitle = 'Add New Vehicle';
    }
    AddeditvehicleComponent.prototype.ngOnInit = function () {
        this.addeditvehicle = (this.selectVehicleDetails.action === undefined) ? new src_app_common_models_vehicle_model__WEBPACK_IMPORTED_MODULE_2__["Vehicledetails"]() : this.selectVehicleDetails;
        this.viewdata = (this.selectVehicleDetails.action === 'view') ? true : false;
        this.pageTitle = (this.selectVehicleDetails.action === 'view')
            ? 'Vehicle Details of ' + this.addeditvehicle.vehicleRegNumber :
            (this.selectVehicleDetails.action === 'edit') ? 'Edit Vehicle Details of ' + this.addeditvehicle.vehicleRegNumber : 'Add New Vehicle';
    };
    AddeditvehicleComponent.prototype.onSubmit = function () {
        this.activeModal.close();
    };
    AddeditvehicleComponent.prototype.saveVehicle = function () {
        var _this = this;
        this.vehicleDetailsApi.addeditvehicle(JSON.stringify(this.addeditvehicle))
            .subscribe(function (data) {
            data.code === 200 ? _this.toasterService.showSuccess('bottom-right', 'Added Vehicle Number Successfully.') : _this.toasterService.showError('bottom-right', 'Unable to Add Vehicle Detils');
            _this.activeModal.close('refreshContent');
        }, function (_error) {
            _this.activeModal.close('Close click');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_common_models_vehicle_model__WEBPACK_IMPORTED_MODULE_2__["Vehicledetails"])
    ], AddeditvehicleComponent.prototype, "selectVehicleDetails", void 0);
    AddeditvehicleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addeditvehicle',
            template: __webpack_require__(/*! ./addeditvehicle.component.html */ "./src/app/vehiclemanagement/addeditvehicle/addeditvehicle.component.html"),
            styles: [__webpack_require__(/*! ./addeditvehicle.component.css */ "./src/app/vehiclemanagement/addeditvehicle/addeditvehicle.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _common_services_vehiclemanagement_api__WEBPACK_IMPORTED_MODULE_3__["VehicleManagementServiceApi"],
            _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]])
    ], AddeditvehicleComponent);
    return AddeditvehicleComponent;
}());



/***/ }),

/***/ "./src/app/vehiclemanagement/vehiclemapping/vehiclemapping.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/vehiclemanagement/vehiclemapping/vehiclemapping.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGVtYW5hZ2VtZW50L3ZlaGljbGVtYXBwaW5nL3ZlaGljbGVtYXBwaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/vehiclemanagement/vehiclemapping/vehiclemapping.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/vehiclemanagement/vehiclemapping/vehiclemapping.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Vehicle Mapping</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Close click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form #vehiclemappingForm=\"ngForm\" name=\"form\" novalidate (ngSubmit)=\"vehiclemappingForm.valid && saveVehicleMap()\">\n  <div class=\"row\">\n      <div class=\"col-md-6 form-group\" [class.has-error]=\"vehiclemappingForm.submitted && vehicleRegNumbercontrol.invalid\" >\n        <label class=\"required\">Vehicle Number</label>\n        <input type=\"text\" readonly class=\"form-control\" [(ngModel)]=\"VehicleMapDetails.vehicleRegNumber\"  name=\"vehicleRegNumber\" required #vehicleRegNumbercontrol=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"vehiclemappingForm.submitted && vehicleRegNumbercontrol.invalid\">\n            Vehicle number is required</span>\n      </div>\n      <div class=\"col-md-6 form-group\" [class.has-error]=\"vehiclemappingForm.submitted && imeiNumbercontrol.invalid\">\n        <label class=\"required\">IMEI Number</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"VehicleMapDetails.imeiNumber\"  name=\"imeiNumber\" required #imeiNumbercontrol=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"vehiclemappingForm.submitted && imeiNumbercontrol.invalid\">\n            IMEI number is required</span>\n      </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 form-group\">\n          <button type=\"submit\" class=\"btn-primary m-t-1\">SUBMIT</button>\n        </div>\n      </div>\n      "

/***/ }),

/***/ "./src/app/vehiclemanagement/vehiclemapping/vehiclemapping.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/vehiclemanagement/vehiclemapping/vehiclemapping.component.ts ***!
  \******************************************************************************/
/*! exports provided: VehiclemappingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclemappingComponent", function() { return VehiclemappingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_vehicle_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/models/vehicle.model */ "./src/app/common/models/vehicle.model.ts");
/* harmony import */ var _common_services_vehiclemanagement_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/vehiclemanagement.api */ "./src/app/common/services/vehiclemanagement.api.ts");
/* harmony import */ var _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/toaster.service */ "./src/app/common/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VehiclemappingComponent = /** @class */ (function () {
    function VehiclemappingComponent(vehicleDetailsApi, toasterService, activeModal) {
        this.vehicleDetailsApi = vehicleDetailsApi;
        this.toasterService = toasterService;
        this.activeModal = activeModal;
    }
    VehiclemappingComponent.prototype.ngOnInit = function () {
        console.log(this.VehicleMapDetails);
    };
    VehiclemappingComponent.prototype.onSubmit = function () {
        this.activeModal.close();
    };
    VehiclemappingComponent.prototype.saveVehicleMap = function () {
        var _this = this;
        var newobj = new Object({ imeiNumber: this.VehicleMapDetails.imeiNumber,
            vehicleRegNumber: this.VehicleMapDetails.vehicleRegNumber });
        console.log(newobj);
        this.vehicleDetailsApi.vehicleMap(JSON.stringify(newobj)).subscribe(function (_data) {
            _this.activeModal.close('refreshContent');
            _this.toasterService.showSuccess('bottom-right', 'Successfully Mapped Vehicle with IMEI Number ');
        }, function (_error) {
            _this.activeModal.close();
            _this.activeModal.close('Close click');
            _this.toasterService.showError('bottom-right', 'ERROR: Unable to Mapped Vehicle with IMEI Number.');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_vehicle_model__WEBPACK_IMPORTED_MODULE_2__["Vehicledetails"])
    ], VehiclemappingComponent.prototype, "VehicleMapDetails", void 0);
    VehiclemappingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehiclemapping',
            template: __webpack_require__(/*! ./vehiclemapping.component.html */ "./src/app/vehiclemanagement/vehiclemapping/vehiclemapping.component.html"),
            styles: [__webpack_require__(/*! ./vehiclemapping.component.css */ "./src/app/vehiclemanagement/vehiclemapping/vehiclemapping.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_vehiclemanagement_api__WEBPACK_IMPORTED_MODULE_3__["VehicleManagementServiceApi"], _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], VehiclemappingComponent);
    return VehiclemappingComponent;
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
    qa: false,
    apiBase: 'http://14.98.164.17:8099',
    // apiBase: 'https://apiabhaya.epragathi.org',
    videoStream: 'https://abhaya.epragathi.org',
    version: '/v1',
    env: 'dev',
    setIntervalTime: 10000,
    pageSize: 10
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production || _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].qa) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    if (window) {
        window.console.log = function () { };
    }
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

module.exports = __webpack_require__(/*! D:\WorkingProjects\Abhaya\AbhayaUI\src\main\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map