(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usermanagement-usermanagement-module"],{

/***/ "./src/app/common/directives/dateformatter.ts":
/*!****************************************************!*\
  !*** ./src/app/common/directives/dateformatter.ts ***!
  \****************************************************/
/*! exports provided: NgbDateFRParserFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateFRParserFormatter", function() { return NgbDateFRParserFormatter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return '';
    }
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt("" + value, 10);
}
// providers: [{provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter}] Need to Use component
var NgbDateFRParserFormatter = /** @class */ (function (_super) {
    __extends(NgbDateFRParserFormatter, _super);
    function NgbDateFRParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateFRParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('/');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null };
            }
            else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0]) };
            }
        }
        return null;
    };
    NgbDateFRParserFormatter.prototype.format = function (date) {
        var stringDate = '';
        if (date) {
            stringDate += isNumber(date.day) ? padNumber(date.day) + '/' : '';
            stringDate += isNumber(date.month) ? padNumber(date.month) + '/' : '';
            stringDate += date.year;
        }
        return stringDate;
    };
    NgbDateFRParserFormatter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], NgbDateFRParserFormatter);
    return NgbDateFRParserFormatter;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]));



/***/ }),

/***/ "./src/app/common/services/usermanagement.api.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/services/usermanagement.api.ts ***!
  \*******************************************************/
/*! exports provided: UserManagementServiceApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementServiceApi", function() { return UserManagementServiceApi; });
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



var UserManagementServiceApi = /** @class */ (function () {
    function UserManagementServiceApi(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'my-auth-token'
            })
        };
    }
    UserManagementServiceApi.prototype.getAllUsers = function (page, size, searchDate, searchValue) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/userDetails";
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue;
        return this.httpClient.get(url);
    };
    UserManagementServiceApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserManagementServiceApi);
    return UserManagementServiceApi;
}());



/***/ }),

/***/ "./src/app/usermanagement/usermanagement-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/usermanagement/usermanagement-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UsermanagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsermanagementRoutingModule", function() { return UsermanagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component */ "./src/app/usermanagement/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"], }
];
var UsermanagementRoutingModule = /** @class */ (function () {
    function UsermanagementRoutingModule() {
    }
    UsermanagementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsermanagementRoutingModule);
    return UsermanagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/usermanagement/usermanagement.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/usermanagement/usermanagement.module.ts ***!
  \*********************************************************/
/*! exports provided: UsermanagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsermanagementModule", function() { return UsermanagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.component */ "./src/app/usermanagement/users.component.ts");
/* harmony import */ var _usermanagement_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usermanagement-routing.module */ "./src/app/usermanagement/usermanagement-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UsermanagementModule = /** @class */ (function () {
    function UsermanagementModule() {
    }
    UsermanagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _usermanagement_routing_module__WEBPACK_IMPORTED_MODULE_6__["UsermanagementRoutingModule"]
            ]
        })
    ], UsermanagementModule);
    return UsermanagementModule;
}());



/***/ }),

/***/ "./src/app/usermanagement/users.component.css":
/*!****************************************************!*\
  !*** ./src/app/usermanagement/users.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJtYW5hZ2VtZW50L3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/usermanagement/users.component.html":
/*!*****************************************************!*\
  !*** ./src/app/usermanagement/users.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-t-1 page-header\">\r\n  <div class=\"col-md-10\">\r\n    <h4>User Management</h4>\r\n    <nav aria-label=\"breadcrumb\" class=\"d-none d-sm-block\">\r\n      <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">User Management</li>\r\n      </ol>\r\n    </nav>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-9 col-sm-6 col-md-11 p-t-3\">\r\n    <span class=\"text-white\">Total Records : {{page.totalElements}}</span>\r\n  </div>\r\n  <div class=\"col-3 col-md-1 text-right\">\r\n     <button type=\"button\" class=\"btn-search\" (click)=\"btnShowFilters()\"><i class=\"icon-ic_searchfilter\"></i></button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row page-filters\" [ngClass]=\"{'show': showFilters == true}\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"></div>\r\n      <div class=\"col-md-3\">\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search By User Name\" [(ngModel)]=\"searchValue\"\r\n            (keyup)=\"searchData();\">\r\n          <button type=\"button\" class=\"btn-close close\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\" (click)=\"clearSearch();\" *ngIf=\"showSearchClear\">&times;</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group-append datepicker\">\r\n            <input type=\"text\" class=\"form-control\" readOnly placeholder=\"yyyy-mm-dd\" name=\"dp\"\r\n              [(ngModel)]=\"model\" (dateSelect)=\"changeDate();\" ngbDatepicker #d=\"ngbDatepicker\">\r\n            <button style=\"outline:none\" class=\"btn-cal calendar\" (click)=\"d.toggle()\" type=\"button\"> <i class=\"fa fa-calendar\"\r\n                aria-hidden=\"true\"></i></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"box-rect-round o-x-auto\">\r\n      <table class=\"grid-table m-t-3\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>User Name</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Email</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"noData\">\r\n          <tr *ngFor=\"let user of userdata | paginate: { id: 'userpage', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\r\n          <td>{{user.userId}}</td>\r\n          <td>{{user.username}}</td>\r\n          <td>{{user.firstName}}</td>\r\n          <td>{{user.lastName}}</td>\r\n          <td>{{user.emailId}}</td>\r\n          <td (click)=\"userDetails(user)\">\r\n              <div class=\"actions-menu\">\r\n                  <button>\r\n                    <i class=\"icon-ic_more\" aria-hidden=\"true\"></i>\r\n                  </button></div></td>\r\n          </tr>\r\n        </tbody>\r\n        <div *ngIf=\"!noData\">\r\n            <div class=\"grid-nodata text-center text-red-medium\">\r\n              <h6>No Data Found</h6>\r\n            </div>\r\n          </div>\r\n      </table>\r\n      <div class=\"row\">\r\n        <div style=\"margin:0px auto;\">\r\n          <pagination-controls *ngIf=\"noData\" id=\"userpage\" class=\"pagination\" (pageChange)=\"pageChanged($event)\"\r\n            maxSize=\"6\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\r\n          </pagination-controls>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/usermanagement/users.component.ts":
/*!***************************************************!*\
  !*** ./src/app/usermanagement/users.component.ts ***!
  \***************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_services_usermanagement_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/usermanagement.api */ "./src/app/common/services/usermanagement.api.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/directives/dateformatter */ "./src/app/common/directives/dateformatter.ts");
/* harmony import */ var _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userdetails/userdetails.component */ "./src/app/usermanagement/userdetails/userdetails.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersApiService, modalService, ngbDateFRParserFormatter) {
        this.usersApiService = usersApiService;
        this.modalService = modalService;
        this.ngbDateFRParserFormatter = ngbDateFRParserFormatter;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.showFilters = false;
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_3__["PageModel"]();
        this.showSearchClear = false;
        this.noData = false;
        this.userdata = [];
        this.searchValue = '';
        this.pageTitle = 'User Details';
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUserDetails(0, this.pageSize);
    };
    UsersComponent.prototype.changeDate = function () {
        this.getUserDetails(0, this.pageSize);
    };
    UsersComponent.prototype.searchData = function () {
        this.getUserDetails(0, this.pageSize);
        this.showSearchClear = (this.searchValue.length > 4) ? true : false;
    };
    UsersComponent.prototype.clearSearch = function () {
        this.searchValue = '';
        this.showSearchClear = false;
        this.searchData();
    };
    UsersComponent.prototype.btnShowFilters = function () {
        this.showFilters = !this.showFilters;
    };
    UsersComponent.prototype.userDetails = function (userdetails) {
        var modalRef = this.modalService.open(_userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_5__["UserdetailsComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.user = userdetails;
    };
    UsersComponent.prototype.pageChanged = function (event) {
        this.p = event - 1;
        this.getUserDetails(this.p, this.pageSize);
    };
    UsersComponent.prototype.getUserDetails = function (page, size) {
        var _this = this;
        var formatDate = this.ngbDateFRParserFormatter.format(this.model);
        this.usersApiService.getAllUsers(page, size, formatDate, this.searchValue)
            .subscribe(function (data) {
            _this.userdata = data.content;
            _this.noData = (_this.userdata.length > 0);
            _this.page = data.page;
        });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/usermanagement/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/usermanagement/users.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_usermanagement_api__WEBPACK_IMPORTED_MODULE_2__["UserManagementServiceApi"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_4__["NgbDateFRParserFormatter"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ })

}]);
//# sourceMappingURL=usermanagement-usermanagement-module.js.map