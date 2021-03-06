(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emergencymonitoring-emergencymonitoring-module"],{

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

/***/ "./src/app/common/services/emergencymonitoring.api.ts":
/*!************************************************************!*\
  !*** ./src/app/common/services/emergencymonitoring.api.ts ***!
  \************************************************************/
/*! exports provided: EmergencyMonitoringServiceApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyMonitoringServiceApi", function() { return EmergencyMonitoringServiceApi; });
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



var EmergencyMonitoringServiceApi = /** @class */ (function () {
    function EmergencyMonitoringServiceApi(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'my-auth-token'
            })
        };
    }
    EmergencyMonitoringServiceApi.prototype.getemergencyMonitoringDetails = function (page, size, startDate, endDate, searchValue) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/ebpPacketData";
        url += "?page=" + page + "&size=" + size + "&searchValue=" + searchValue + "&startDate=" + startDate + "&endDate=" + endDate;
        return this.httpClient.get(url);
    };
    EmergencyMonitoringServiceApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmergencyMonitoringServiceApi);
    return EmergencyMonitoringServiceApi;
}());



/***/ }),

/***/ "./src/app/emergencymonitoring/emergencymonitoring-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/emergencymonitoring/emergencymonitoring-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: EmergencymonitoringRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencymonitoringRoutingModule", function() { return EmergencymonitoringRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _emergencymonitoring_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emergencymonitoring.component */ "./src/app/emergencymonitoring/emergencymonitoring.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _emergencymonitoring_component__WEBPACK_IMPORTED_MODULE_2__["EmergencymonitoringComponent"], }
];
var EmergencymonitoringRoutingModule = /** @class */ (function () {
    function EmergencymonitoringRoutingModule() {
    }
    EmergencymonitoringRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EmergencymonitoringRoutingModule);
    return EmergencymonitoringRoutingModule;
}());



/***/ }),

/***/ "./src/app/emergencymonitoring/emergencymonitoring.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/emergencymonitoring/emergencymonitoring.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtZXJnZW5jeW1vbml0b3JpbmcvZW1lcmdlbmN5bW9uaXRvcmluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/emergencymonitoring/emergencymonitoring.component.html":
/*!************************************************************************!*\
  !*** ./src/app/emergencymonitoring/emergencymonitoring.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-t-1 page-header\">\r\n  <div class=\"col-md-10\">\r\n    <h4>Emergency Management</h4>\r\n    <nav aria-label=\"breadcrumb\" class=\"d-none d-sm-block\">\r\n      <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Emergency Management</li>\r\n      </ol>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-9 col-sm-10 col-md-10 p-t-3\">\r\n    <span class=\"text-white\">Total Records : {{page.totalElements}}</span>\r\n  </div>\r\n  <div class=\"col-3 col-sm-2 col-md-2 text-right\">\r\n      <button type=\"button\" class=\"btn-refresh\" (click)=\"refreshPage()\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\r\n      </button>\r\n     <button type=\"button\" class=\"btn-search\" (click)=\"btnShowFilters()\"><i class=\"icon-ic_searchfilter\"></i></button>\r\n  </div>\r\n</div>\r\n<div class=\"row page-filters\" [ngClass]=\"{'show': showFilters == true}\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"></div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search By IMEI No\" [(ngModel)]=\"searchValue\"\r\n            (keyup)=\"searchData();\">\r\n          <!-- <button type=\"button\" class=\"btn-close close\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\" (click)=\"clearSearch();\" *ngIf=\"showSearchClear\">&times;</span>\r\n          </button> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group-append datepicker\">\r\n            <input type=\"text\" class=\"form-control\" readOnly placeholder=\"Start Date\" name=\"dp\"\r\n              [(ngModel)]=\"startDateModel\" (dateSelect)=\"changeDate();\" ngbDatepicker #startDate=\"ngbDatepicker\">\r\n            <button style=\"outline:none\" class=\"btn-cal calendar\" (click)=\"startDate.toggle()\" type=\"button\"> <i class=\"fa fa-calendar\"\r\n                aria-hidden=\"true\"></i></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group-append datepicker\">\r\n            <input type=\"text\" class=\"form-control\" readOnly placeholder=\"End Date\" name=\"dp\"\r\n              [(ngModel)]=\"endDateModel\" (dateSelect)=\"changeDate();\" ngbDatepicker #endDate=\"ngbDatepicker\">\r\n            <button style=\"outline:none\" class=\"btn-cal calendar\" (click)=\"endDate.toggle()\" type=\"button\"> <i class=\"fa fa-calendar\"\r\n                aria-hidden=\"true\"></i></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"box-rect-round o-x-auto\">\r\n      <table class=\"grid-table m-t-3\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>IMEI No</th>\r\n            <th>Vehicle No</th>\r\n            <th>Latitude</th>\r\n            <th>Longitude</th>\r\n            <!-- <th>Packet Type</th> -->\r\n            <th>Network Date</th>\r\n            <th>Network Time</th>\r\n            <th>Reply No</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"noData\">\r\n          <tr *ngFor=\"let details of emergencyMonitoringdata | paginate: { id: 'emergencymonitoringpage', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\r\n            <td>{{details.ebpPacketDataId}}</td>\r\n            <td>{{details.imeiNumber}}</td>\r\n            <td>{{details.vehicleRegNo}}</td>\r\n            <td>{{details.latitude}}</td>\r\n            <td>{{details.longitude}}</td>\r\n            <!-- <td>EPB</td> -->\r\n            <td>{{details.networkDate}}</td>\r\n            <td>{{details.networkTime}}</td>\r\n            <td>{{details.replyNumber}}</td>\r\n            <td (click)=\"emergencyDetails(details)\">\r\n                <div class=\"actions-menu\">\r\n                    <button>\r\n                      <i class=\"icon-ic_more\" aria-hidden=\"true\"></i>\r\n                    </button></div></td>\r\n          </tr>\r\n        </tbody>\r\n        <div *ngIf=\"!noData\">\r\n            <div class=\"grid-nodata text-center text-red-medium\">\r\n              <h6>No Data Found</h6>\r\n            </div>\r\n          </div>\r\n      </table>\r\n      <div class=\"row\">\r\n        <div style=\"margin:0px auto;\">\r\n          <pagination-controls *ngIf=\"noData\" id=\"emergencymonitoringpage\" class=\"pagination\" (pageChange)=\"pageChanged($event)\"\r\n            maxSize=\"6\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\r\n          </pagination-controls>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/emergencymonitoring/emergencymonitoring.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/emergencymonitoring/emergencymonitoring.component.ts ***!
  \**********************************************************************/
/*! exports provided: EmergencymonitoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencymonitoringComponent", function() { return EmergencymonitoringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_services_emergencymonitoring_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/emergencymonitoring.api */ "./src/app/common/services/emergencymonitoring.api.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/directives/dateformatter */ "./src/app/common/directives/dateformatter.ts");
/* harmony import */ var _emergencydetails_emergencydetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emergencydetails/emergencydetails.component */ "./src/app/emergencymonitoring/emergencydetails/emergencydetails.component.ts");
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







var EmergencymonitoringComponent = /** @class */ (function () {
    function EmergencymonitoringComponent(emergencyApiService, modalService, ngbDateFRParserFormatter) {
        this.emergencyApiService = emergencyApiService;
        this.modalService = modalService;
        this.ngbDateFRParserFormatter = ngbDateFRParserFormatter;
        this.showFilters = false;
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_3__["PageModel"]();
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.searchValue = '';
        this.showSearchClear = false;
        this.noData = false;
        this.emergencyMonitoringdata = [];
    }
    EmergencymonitoringComponent.prototype.ngOnInit = function () {
        this.getemergencyMonitoringDetails(0, this.pageSize);
    };
    EmergencymonitoringComponent.prototype.refreshPage = function () {
        this.searchValue = '';
        this.startDateModel = undefined;
        this.endDateModel = undefined;
        this.getemergencyMonitoringDetails(0, this.pageSize);
    };
    EmergencymonitoringComponent.prototype.emergencyDetails = function (emergencyDetails) {
        var modalRef = this.modalService.open(_emergencydetails_emergencydetails_component__WEBPACK_IMPORTED_MODULE_5__["EmergencydetailsComponent"], { size: 'lg', backdrop: 'static',
            keyboard: false });
        modalRef.componentInstance.selectedEmergencydata = emergencyDetails;
    };
    EmergencymonitoringComponent.prototype.btnShowFilters = function () {
        this.showFilters = !this.showFilters;
    };
    EmergencymonitoringComponent.prototype.changeDate = function () {
        this.getemergencyMonitoringDetails(0, this.pageSize);
    };
    EmergencymonitoringComponent.prototype.searchData = function () {
        this.getemergencyMonitoringDetails(0, this.pageSize);
        this.showSearchClear = (this.searchValue.length > 4) ? true : false;
    };
    EmergencymonitoringComponent.prototype.clearSearch = function () {
        this.searchValue = '';
        this.showSearchClear = false;
        this.searchData();
    };
    EmergencymonitoringComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.getemergencyMonitoringDetails(this.p - 1, this.pageSize);
    };
    EmergencymonitoringComponent.prototype.getemergencyMonitoringDetails = function (page, size) {
        var _this = this;
        var formatStartDate = this.ngbDateFRParserFormatter.format(this.startDateModel);
        var formatEndDate = this.ngbDateFRParserFormatter.format(this.endDateModel);
        this.emergencyApiService.getemergencyMonitoringDetails(page, size, formatStartDate, formatEndDate, this.searchValue)
            .subscribe(function (data) {
            _this.emergencyMonitoringdata = data.content;
            _this.noData = (_this.emergencyMonitoringdata.length > 0);
            _this.page = data.page;
            console.log(_this.emergencyMonitoringdata);
        });
    };
    EmergencymonitoringComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emergencymonitoring',
            template: __webpack_require__(/*! ./emergencymonitoring.component.html */ "./src/app/emergencymonitoring/emergencymonitoring.component.html"),
            styles: [__webpack_require__(/*! ./emergencymonitoring.component.css */ "./src/app/emergencymonitoring/emergencymonitoring.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_emergencymonitoring_api__WEBPACK_IMPORTED_MODULE_2__["EmergencyMonitoringServiceApi"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_4__["NgbDateFRParserFormatter"]])
    ], EmergencymonitoringComponent);
    return EmergencymonitoringComponent;
}());



/***/ }),

/***/ "./src/app/emergencymonitoring/emergencymonitoring.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/emergencymonitoring/emergencymonitoring.module.ts ***!
  \*******************************************************************/
/*! exports provided: EmergencymonitoringModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencymonitoringModule", function() { return EmergencymonitoringModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _emergencymonitoring_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emergencymonitoring.component */ "./src/app/emergencymonitoring/emergencymonitoring.component.ts");
/* harmony import */ var _emergencymonitoring_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emergencymonitoring-routing.module */ "./src/app/emergencymonitoring/emergencymonitoring-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EmergencymonitoringModule = /** @class */ (function () {
    function EmergencymonitoringModule() {
    }
    EmergencymonitoringModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_emergencymonitoring_component__WEBPACK_IMPORTED_MODULE_5__["EmergencymonitoringComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
                _emergencymonitoring_routing_module__WEBPACK_IMPORTED_MODULE_6__["EmergencymonitoringRoutingModule"]
            ]
        })
    ], EmergencymonitoringModule);
    return EmergencymonitoringModule;
}());



/***/ })

}]);
//# sourceMappingURL=emergencymonitoring-emergencymonitoring-module.js.map