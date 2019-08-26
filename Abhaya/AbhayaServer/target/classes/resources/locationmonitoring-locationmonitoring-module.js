(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locationmonitoring-locationmonitoring-module"],{

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

/***/ "./src/app/common/services/locationmonitoring.api.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/services/locationmonitoring.api.ts ***!
  \***********************************************************/
/*! exports provided: LocationMonitoringServiceApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationMonitoringServiceApi", function() { return LocationMonitoringServiceApi; });
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



var LocationMonitoringServiceApi = /** @class */ (function () {
    function LocationMonitoringServiceApi(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'my-auth-token'
            })
        };
    }
    LocationMonitoringServiceApi.prototype.getLocationMonitoringDetails = function (page, size, startDate, endDate, searchValue) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/lmpPacketData";
        url += "?page=" + page + "&size=" + size + "&searchValue=" + searchValue + "&startDate=" + startDate + "&endDate=" + endDate;
        return this.httpClient.get(url);
    };
    LocationMonitoringServiceApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LocationMonitoringServiceApi);
    return LocationMonitoringServiceApi;
}());



/***/ }),

/***/ "./src/app/locationmonitoring/locationmonitoring-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/locationmonitoring/locationmonitoring-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: LocationmonitoringRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationmonitoringRoutingModule", function() { return LocationmonitoringRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _locationmonitoring_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locationmonitoring.component */ "./src/app/locationmonitoring/locationmonitoring.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _locationmonitoring_component__WEBPACK_IMPORTED_MODULE_2__["LocationmonitoringComponent"], }
];
var LocationmonitoringRoutingModule = /** @class */ (function () {
    function LocationmonitoringRoutingModule() {
    }
    LocationmonitoringRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LocationmonitoringRoutingModule);
    return LocationmonitoringRoutingModule;
}());



/***/ }),

/***/ "./src/app/locationmonitoring/locationmonitoring.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/locationmonitoring/locationmonitoring.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9ubW9uaXRvcmluZy9sb2NhdGlvbm1vbml0b3JpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/locationmonitoring/locationmonitoring.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/locationmonitoring/locationmonitoring.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-t-1 page-header\">\r\n  <div class=\"col-md-8\">\r\n    <h4>Location Management</h4>\r\n    <nav aria-label=\"breadcrumb\" class=\"d-none d-sm-block\">\r\n      <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Location Management</li>\r\n      </ol>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6 col-md-10 p-t-3\">\r\n    <span class=\"text-white\">Total Records : {{page.totalElements}}</span>\r\n  </div>\r\n  <div class=\"col-md-2 text-right\">\r\n      <button type=\"button\" class=\"btn-refresh\" (click)=\"refreshPage()\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\r\n      </button>\r\n     <button type=\"button\" class=\"btn-search\" (click)=\"btnShowFilters()\"><i class=\"icon-ic_searchfilter\"></i></button>\r\n  </div>\r\n</div>\r\n<div class=\"row page-filters\" [ngClass]=\"{'show': showFilters == true}\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"></div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search By IMEI/Vehicle No\" [(ngModel)]=\"searchValue\"\r\n            (keyup)=\"searchData();\">\r\n          <button type=\"button\" class=\"btn-close close\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\" (click)=\"clearSearch();\" *ngIf=\"showSearchClear\">&times;</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group-append datepicker\">\r\n            <input type=\"text\" class=\"form-control\" readOnly placeholder=\"Start Date\" name=\"dp\"\r\n              [(ngModel)]=\"startDateModel\" (dateSelect)=\"changeDate();\" ngbDatepicker #startDate=\"ngbDatepicker\">\r\n            <button style=\"outline:none\" class=\"btn-cal calendar\" (click)=\"startDate.toggle()\" type=\"button\"> <i class=\"fa fa-calendar\"\r\n                aria-hidden=\"true\"></i></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group-append datepicker\">\r\n              <input type=\"text\" class=\"form-control\" readOnly placeholder=\"End Date\" name=\"dp\"\r\n                [(ngModel)]=\"endDateModel\" (dateSelect)=\"changeDate();\" ngbDatepicker #endDate=\"ngbDatepicker\">\r\n              <button style=\"outline:none\" class=\"btn-cal calendar\" (click)=\"endDate.toggle()\" type=\"button\"> <i class=\"fa fa-calendar\"\r\n                  aria-hidden=\"true\"></i></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"box-rect-round o-x-auto\">\r\n      <table class=\"grid-table m-t-3\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>IMEI No</th>\r\n            <th>Vehicle No</th>\r\n            <th>Vendor ID</th>\r\n            <th>Latitude</th>\r\n            <th>Longitude</th>\r\n            <th>Network Date</th>\r\n            <th>Network Time</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"noData\">\r\n          <tr *ngFor=\"let location of locationMonitoringdata | paginate: { id: 'locationmonitoringpage', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\r\n            <td>{{location.lmpPacketDataId}}</td>\r\n            <td>{{location.imei}}</td>\r\n            <td>{{location.vehicleRegNo}}</td>\r\n            <td>{{location.vendorId}}</td>\r\n            <td>{{location.latitude}}</td>\r\n            <td>{{location.longitude}}</td>\r\n            <td>{{location.networkDate}}</td>\r\n            <td>{{location.networkTime}}</td>\r\n            <td> \r\n              <div class=\"actions-menu dropdown-click\">\r\n                <button>\r\n                  <i class=\"icon-ic_more\" aria-hidden=\"true\"></i>\r\n                </button>\r\n                <ul>\r\n                  <li>\r\n                    <a title=\"View Location Details\" class=\"icon\" (click)=\"locationDetails(location)\">\r\n                      <i class=\"icon-ic_view\" aria-hidden=\"true\"></i><span>View Details</span>\r\n                    </a>\r\n                  </li>\r\n              \r\n                </ul>\r\n                </div>\r\n                  </td>\r\n          </tr>\r\n        </tbody>\r\n        <div *ngIf=\"!noData\">\r\n          <div class=\"grid-nodata text-center text-red-medium\">\r\n            <h6>No Data Found</h6>\r\n          </div>\r\n        </div>\r\n      </table>\r\n      <div class=\"row\">\r\n        <div style=\"margin:0px auto;\">\r\n          <pagination-controls *ngIf=\"noData\" id=\"locationmonitoringpage\" class=\"pagination\" (pageChange)=\"pageChanged($event)\" maxSize=\"6\"\r\n            directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\r\n          </pagination-controls>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/locationmonitoring/locationmonitoring.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/locationmonitoring/locationmonitoring.component.ts ***!
  \********************************************************************/
/*! exports provided: LocationmonitoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationmonitoringComponent", function() { return LocationmonitoringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_locationmonitoring_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/services/locationmonitoring.api */ "./src/app/common/services/locationmonitoring.api.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/directives/dateformatter */ "./src/app/common/directives/dateformatter.ts");
/* harmony import */ var _locationdetails_locationdetails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locationdetails/locationdetails.component */ "./src/app/locationmonitoring/locationdetails/locationdetails.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LocationmonitoringComponent = /** @class */ (function () {
    function LocationmonitoringComponent(locationApiService, router, modalService, ngbDateFRParserFormatter) {
        this.locationApiService = locationApiService;
        this.router = router;
        this.modalService = modalService;
        this.ngbDateFRParserFormatter = ngbDateFRParserFormatter;
        this.showFilters = false;
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_4__["PageModel"]();
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].pageSize;
        this.showSearchClear = false;
        this.noData = false;
        this.locationMonitoringdata = [];
        this.intervalTime = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].setIntervalTime;
        this.searchValue = '';
    }
    LocationmonitoringComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLocationMonitoringDetails(0, this.pageSize);
        this.updateLocationDetails = setInterval(function () {
            _this.getLocationMonitoringDetails(0, _this.pageSize);
        }, this.intervalTime);
    };
    LocationmonitoringComponent.prototype.locationDetails = function (locationDetails) {
        var modalRef = this.modalService.open(_locationdetails_locationdetails_component__WEBPACK_IMPORTED_MODULE_6__["LocationdetailsComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectedLocationDetails = locationDetails;
    };
    LocationmonitoringComponent.prototype.viewTracking = function (curLocation) {
        this.router.navigate(['/trackdevice'], {
            queryParams: { imeiNumber: curLocation.imei },
            queryParamsHandling: 'merge'
        });
    };
    LocationmonitoringComponent.prototype.btnShowFilters = function () {
        this.showFilters = !this.showFilters;
    };
    LocationmonitoringComponent.prototype.changeDate = function () {
        this.getLocationMonitoringDetails(0, this.pageSize);
    };
    LocationmonitoringComponent.prototype.searchData = function () {
        this.getLocationMonitoringDetails(0, this.pageSize);
        this.showSearchClear = (this.searchValue.length > 4) ? true : false;
    };
    LocationmonitoringComponent.prototype.refreshPage = function () {
        this.searchValue = '';
        this.startDateModel = undefined;
        this.endDateModel = undefined;
    };
    LocationmonitoringComponent.prototype.clearSearch = function () {
        this.searchValue = '';
        this.showSearchClear = false;
        this.searchData();
    };
    LocationmonitoringComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.getLocationMonitoringDetails(this.p - 1, this.pageSize);
    };
    LocationmonitoringComponent.prototype.getLocationMonitoringDetails = function (page, size) {
        var _this = this;
        var formatStartDate = this.ngbDateFRParserFormatter.format(this.startDateModel);
        var formatEndDate = this.ngbDateFRParserFormatter.format(this.endDateModel);
        this.locationApiService.getLocationMonitoringDetails(page, size, formatStartDate, formatEndDate, this.searchValue)
            .subscribe(function (data) {
            _this.locationMonitoringdata = data.content;
            _this.noData = (_this.locationMonitoringdata.length > 0);
            _this.page = data.page;
            console.log(_this.locationMonitoringdata);
        });
    };
    LocationmonitoringComponent.prototype.ngOnDestroy = function () {
        if (this.updateLocationDetails) {
            clearInterval(this.updateLocationDetails);
        }
    };
    LocationmonitoringComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locationmonitoring',
            template: __webpack_require__(/*! ./locationmonitoring.component.html */ "./src/app/locationmonitoring/locationmonitoring.component.html"),
            styles: [__webpack_require__(/*! ./locationmonitoring.component.css */ "./src/app/locationmonitoring/locationmonitoring.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_locationmonitoring_api__WEBPACK_IMPORTED_MODULE_3__["LocationMonitoringServiceApi"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_5__["NgbDateFRParserFormatter"]])
    ], LocationmonitoringComponent);
    return LocationmonitoringComponent;
}());



/***/ }),

/***/ "./src/app/locationmonitoring/locationmonitoring.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/locationmonitoring/locationmonitoring.module.ts ***!
  \*****************************************************************/
/*! exports provided: LocationmonitoringModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationmonitoringModule", function() { return LocationmonitoringModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _locationmonitoring_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locationmonitoring-routing.module */ "./src/app/locationmonitoring/locationmonitoring-routing.module.ts");
/* harmony import */ var _locationmonitoring_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locationmonitoring.component */ "./src/app/locationmonitoring/locationmonitoring.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LocationmonitoringModule = /** @class */ (function () {
    function LocationmonitoringModule() {
    }
    LocationmonitoringModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_locationmonitoring_component__WEBPACK_IMPORTED_MODULE_6__["LocationmonitoringComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                _locationmonitoring_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationmonitoringRoutingModule"]
            ]
        })
    ], LocationmonitoringModule);
    return LocationmonitoringModule;
}());



/***/ })

}]);
//# sourceMappingURL=locationmonitoring-locationmonitoring-module.js.map