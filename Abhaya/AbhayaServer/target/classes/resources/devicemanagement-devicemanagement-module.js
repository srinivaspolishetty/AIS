(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["devicemanagement-devicemanagement-module"],{

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

/***/ "./src/app/devicemanagement/devicecommunication/devicecommunication.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/devicemanagement/devicecommunication/devicecommunication.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZW1hbmFnZW1lbnQvZGV2aWNlY29tbXVuaWNhdGlvbi9kZXZpY2Vjb21tdW5pY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/devicemanagement/devicecommunication/devicecommunication.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/devicemanagement/devicecommunication/devicecommunication.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-t-1 page-header\">\n  <div class=\"col-md-8\">\n    <h4>Device Communication</h4>\n    <nav aria-label=\"breadcrumb\" class=\"d-none d-sm-block\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\">Home</a></li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Device Management</li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Device Communication</li>\n      </ol>\n    </nav>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-9 col-sm-10 col-md-10 p-t-3\">\n    <span class=\"text-white\">Total Records : {{page.totalElements}}</span>\n  </div>\n  <div class=\"col-3 col-sm-2 col-md-2 text-right\">\n    <button type=\"button\" class=\"btn-refresh\" (click)=\"refreshPage()\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"btn-search\" (click)=\"btnShowFilters()\"><i class=\"icon-ic_searchfilter\"></i></button>\n  </div>\n</div>\n<div class=\"row page-filters\" [ngClass]=\"{'show': showFilters == true}\">\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search By IMEI No\" [(ngModel)]=\"searchValue\"\n            (keyup)=\"searchData();\">\n          <!-- <button type=\"button\" class=\"btn-close close\" aria-label=\"Close\">\n            <span aria-hidden=\"true\" (click)=\"clearSearch();\" *ngIf=\"showSearchClear\">&times;</span>\n          </button> -->\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <div class=\"input-group-append datepicker\">\n            <input type=\"text\" class=\"form-control\" readOnly placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\"\n              (dateSelect)=\"changeDate();\" ngbDatepicker #d=\"ngbDatepicker\">\n            <button style=\"outline:none\" class=\"btn-cal calendar\" (click)=\"d.toggle()\" type=\"button\"> <i\n                class=\"fa fa-calendar\" aria-hidden=\"true\"></i></button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"box-rect-round o-x-auto\">\n      <table class=\"grid-table m-t-3\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>IMEI No</th>\n            <th>Status</th>\n            <th *ngIf=\"action == 'vehicleMode'\">Vehicle Mode</th>\n            <th *ngIf=\"action == 'ignitionStatus'\">Ignition Status</th>\n            <th *ngIf=\"action == 'emergencyStatus'\">Emergency Status</th>\n            <th *ngIf=\"action == 'mainPowerStatus'\">Main Power Status</th>\n            <th *ngIf=\"action == 'tamperAlert'\">Tamper Alert</th>\n            <th *ngIf=\"action == 'memoryPercentage'\">Memory Percentage</th>\n            <th *ngIf=\"action == 'batteryPercentage'\">Battery Percentage</th>\n            <th>Langitude</th>\n            <th>Latitude</th>\n            <th>Network Date</th>\n            <th>Network Time</th>\n            <th>Is Over Speed</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"noData\">\n          <tr [ngClass]=\"{'bg-row' : isDeviceOverSpeed}\"\n            *ngFor=\"let details of deviceCommData | paginate: { id: 'devicecommdetailspage', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n            <td>{{details.deviceCommunicationId}}</td>\n            <td>{{details.imeiNumber}}</td>\n            <td>{{details.status}}</td>\n            <td *ngIf=\"action == 'vehicleMode'\">{{details.vehicleMode}}</td>\n            <td *ngIf=\"action == 'ignitionStatus'\">{{details.ignitionStatus == 1 ? 'ON' : 'OFF'}}</td>\n            <td *ngIf=\"action == 'emergencyStatus'\">{{details.emergencyStatus == 1 ? 'ON' : 'OFF'}}</td>\n            <td *ngIf=\"action == 'mainPowerStatus'\">{{details.mainPowerStatus == 1 ? 'ON' : 'OFF'}}</td>\n            <td *ngIf=\"action == 'tamperAlert'\">{{details.tamperAlert == 'O' ? 'ON' : 'OFF'}}</td>\n            <td *ngIf=\"action == 'memoryPercentage'\">{{details.memoryPercentage > 40 ? 'Good' : 'Critical'}} ({{details.memoryPercentage}})</td>\n            <td *ngIf=\"action == 'batteryPercentage'\">{{details.batteryPercentage > 40 ? 'Good' : 'Critical'}} ({{details.batteryPercentage}})</td>\n            <td>{{details.langitude}}</td>\n            <td>{{details.latitude}}</td>\n            <td>{{details.networkDate}}</td>\n            <td>{{details.networkTime}}</td>\n            <td>{{details.isDeviceOverSpeed}}</td>\n            <td (click)=\"deviceComDetails(details)\">\n              <div class=\"actions-menu\">\n                <button>\n                  <i class=\"icon-ic_more\" aria-hidden=\"true\"></i>\n                </button></div>\n            </td>\n          </tr>\n        </tbody>\n        <div *ngIf=\"!noData\">\n          <div class=\"grid-nodata text-center text-red-medium\">\n            <h6>No Data Found</h6>\n          </div>\n        </div>\n      </table>\n      <div class=\"row\">\n        <div style=\"margin:0px auto;\">\n          <pagination-controls *ngIf=\"noData\" id=\"devicecommdetailspage\" class=\"pagination\"\n            (pageChange)=\"pageChanged($event)\" maxSize=\"6\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\"\n            previousLabel=\"Prev\" nextLabel=\"Next\">\n          </pagination-controls>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/devicemanagement/devicecommunication/devicecommunication.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/devicemanagement/devicecommunication/devicecommunication.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DevicecommunicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicecommunicationComponent", function() { return DevicecommunicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_devicemanagement_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/devicemanagement.api */ "./src/app/common/services/devicemanagement.api.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/directives/dateformatter */ "./src/app/common/directives/dateformatter.ts");
/* harmony import */ var _devicecomdetails_devicecomdetails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devicecomdetails/devicecomdetails.component */ "./src/app/devicemanagement/devicecommunication/devicecomdetails/devicecomdetails.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DevicecommunicationComponent = /** @class */ (function () {
    function DevicecommunicationComponent(devicemanagementApiService, modalService, ngbDateFRParserFormatter, activatedRoute) {
        this.devicemanagementApiService = devicemanagementApiService;
        this.modalService = modalService;
        this.ngbDateFRParserFormatter = ngbDateFRParserFormatter;
        this.activatedRoute = activatedRoute;
        this.showFilters = false;
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_4__["PageModel"]();
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].pageSize;
        this.showSearchClear = false;
        this.noData = false;
        this.deviceCommData = [];
        this.searchValue = '';
    }
    DevicecommunicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.action = params['action'];
            _this.actionValue = params['actionValue'];
        });
        this.getAllDeviceCommunication(0, this.pageSize, this.action, this.actionValue);
    };
    DevicecommunicationComponent.prototype.deviceComDetails = function (deviceComDetails) {
        var modalRef = this.modalService.open(_devicecomdetails_devicecomdetails_component__WEBPACK_IMPORTED_MODULE_6__["DevicecomdetailsComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectedComDetails = deviceComDetails;
    };
    DevicecommunicationComponent.prototype.btnShowFilters = function () {
        this.showFilters = !this.showFilters;
    };
    DevicecommunicationComponent.prototype.changeDate = function () {
        this.getAllDeviceCommunication(0, this.pageSize, this.action, this.actionValue);
    };
    DevicecommunicationComponent.prototype.searchData = function () {
        this.getAllDeviceCommunication(0, this.pageSize, this.action, this.actionValue);
        this.showSearchClear = (this.searchValue.length > 4) ? true : false;
    };
    DevicecommunicationComponent.prototype.refreshPage = function () {
        this.searchValue = '';
        this.model = undefined;
        this.getAllDeviceCommunication(0, this.pageSize, this.action, this.actionValue);
    };
    DevicecommunicationComponent.prototype.clearSearch = function () {
        this.searchValue = '';
        this.showSearchClear = false;
        this.searchData();
    };
    DevicecommunicationComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.getAllDeviceCommunication(this.p - 1, this.pageSize, this.action, this.actionValue);
    };
    DevicecommunicationComponent.prototype.getAllDeviceCommunication = function (page, size, action, actionValue) {
        var _this = this;
        this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
        this.devicemanagementApiService.getDeviceCommDetails(page, size, this.formatDate, this.searchValue, action, actionValue)
            .subscribe(function (data) {
            _this.deviceCommData = data.content;
            _this.noData = (_this.deviceCommData.length > 0);
            _this.page = data.page;
            console.log(_this.deviceCommData);
        });
    };
    DevicecommunicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-devicecommunication',
            template: __webpack_require__(/*! ./devicecommunication.component.html */ "./src/app/devicemanagement/devicecommunication/devicecommunication.component.html"),
            styles: [__webpack_require__(/*! ./devicecommunication.component.css */ "./src/app/devicemanagement/devicecommunication/devicecommunication.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_devicemanagement_api__WEBPACK_IMPORTED_MODULE_3__["DeviceManagementServiceApi"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_5__["NgbDateFRParserFormatter"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DevicecommunicationComponent);
    return DevicecommunicationComponent;
}());



/***/ }),

/***/ "./src/app/devicemanagement/devicemanagement-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/devicemanagement/devicemanagement-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DevicemanagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicemanagementRoutingModule", function() { return DevicemanagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _devices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./devices.component */ "./src/app/devicemanagement/devices.component.ts");
/* harmony import */ var _devicecommunication_devicecommunication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devicecommunication/devicecommunication.component */ "./src/app/devicemanagement/devicecommunication/devicecommunication.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'devicedetails', pathMatch: 'full' },
    { path: 'devicedetails', component: _devices_component__WEBPACK_IMPORTED_MODULE_2__["DevicesComponent"], },
    { path: 'devicecommunication', component: _devicecommunication_devicecommunication_component__WEBPACK_IMPORTED_MODULE_3__["DevicecommunicationComponent"], }
];
var DevicemanagementRoutingModule = /** @class */ (function () {
    function DevicemanagementRoutingModule() {
    }
    DevicemanagementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DevicemanagementRoutingModule);
    return DevicemanagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/devicemanagement/devicemanagement.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/devicemanagement/devicemanagement.module.ts ***!
  \*************************************************************/
/*! exports provided: DevicemanagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicemanagementModule", function() { return DevicemanagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _devices_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./devices.component */ "./src/app/devicemanagement/devices.component.ts");
/* harmony import */ var _devicemanagement_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devicemanagement-routing.module */ "./src/app/devicemanagement/devicemanagement-routing.module.ts");
/* harmony import */ var _devicecommunication_devicecommunication_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devicecommunication/devicecommunication.component */ "./src/app/devicemanagement/devicecommunication/devicecommunication.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DevicemanagementModule = /** @class */ (function () {
    function DevicemanagementModule() {
    }
    DevicemanagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_devices_component__WEBPACK_IMPORTED_MODULE_5__["DevicesComponent"], _devicecommunication_devicecommunication_component__WEBPACK_IMPORTED_MODULE_7__["DevicecommunicationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
                _devicemanagement_routing_module__WEBPACK_IMPORTED_MODULE_6__["DevicemanagementRoutingModule"]
            ]
        })
    ], DevicemanagementModule);
    return DevicemanagementModule;
}());



/***/ }),

/***/ "./src/app/devicemanagement/devices.component.css":
/*!********************************************************!*\
  !*** ./src/app/devicemanagement/devices.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZW1hbmFnZW1lbnQvZGV2aWNlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/devicemanagement/devices.component.html":
/*!*********************************************************!*\
  !*** ./src/app/devicemanagement/devices.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-t-1 page-header\">\r\n  <div class=\"col-md-8\">\r\n    <h4>Device Details</h4>\r\n    <nav aria-label=\"breadcrumb\" class=\"d-none d-sm-block\">\r\n      <ol class=\"breadcrumb\">\r\n        <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Device Management</li>\r\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Device Details</li>\r\n      </ol>\r\n    </nav>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-9 col-sm-10 col-md-10 p-t-3\">\r\n    <span class=\"text-white\">Total Records : {{page.totalElements}}</span>\r\n  </div>\r\n  <div class=\"col-3 col-sm-2 col-md-2 text-right\">\r\n      <button type=\"button\" class=\"btn-refresh\" (click)=\"refreshPage()\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\r\n      </button>\r\n     <button type=\"button\" class=\"btn-search\" (click)=\"btnShowFilters()\"><i class=\"icon-ic_searchfilter\"></i></button>\r\n  </div>\r\n</div>\r\n<div class=\"row page-filters\" [ngClass]=\"{'show': showFilters == true}\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"></div>\r\n      <div class=\"col-md-3\"></div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search By IMEI No\" [(ngModel)]=\"searchValue\"\r\n            (keyup)=\"searchData();\">\r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group-append datepicker\">\r\n            <input type=\"text\" class=\"form-control\" readOnly placeholder=\"yyyy-mm-dd\" name=\"dp\"\r\n              [(ngModel)]=\"model\" (dateSelect)=\"changeDate();\" ngbDatepicker #d=\"ngbDatepicker\">\r\n            <button style=\"outline:none\" class=\"btn-cal calendar\" (click)=\"d.toggle()\" type=\"button\"> <i class=\"fa fa-calendar\"\r\n              aria-hidden=\"true\"></i></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"box-rect-round\">\r\n      <table class=\"grid-table m-t-3\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>IMEI No</th>\r\n            <th>SIM No</th>\r\n            <th>IP Address</th>\r\n            <th>Date</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"noData\">\r\n          <tr\r\n            *ngFor=\"let details of deviceData | paginate: { id: 'devicedetailspage', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\r\n            <td>{{details.id}}</td>\r\n            <td>{{details.imeiNumber}}</td>\r\n            <td>{{details.simNumber}}</td>\r\n            <td>{{details.ipAddress}}</td>\r\n            <td>{{details.createdDate}}</td>\r\n            <!-- <td><i class=\"fa fa-ellipsis-v\" (click)=\"deviceDetailspopup(details)\" aria-hidden=\"true\"></i></td> -->\r\n            <td>\r\n              <div class='actions-menu dropdown-click'>\r\n                <button>\r\n                  <i class=\"icon-ic_more\" aria-hidden=\"true\"></i>\r\n                </button>\r\n                <ul>\r\n                  <li>\r\n                    <a title=\"Edit Vehicle Details\" class=\"icon\" (click)=\"deviceDetailspopup(details, 'view')\">\r\n                      <i class=\"icon-ic_view\" aria-hidden=\"true\"></i><span>View Details</span>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a title=\"Download QR Code\" class=\"icon\" (click)=\"deviceDetailspopup(details, 'edit')\">\r\n                      <i class=\"icon-ic_edit\" aria-hidden=\"true\"></i> <span>Edit Details</span>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a title=\"Install Device\" class=\"icon\" (click)=\"cmdHealthDevice(details, 'ACTVR', 'Device Activation')\">\r\n                      <i class=\"icon-ic_activate\" aria-hidden=\"true\"></i><span>Activation</span>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a title=\"View Vehicle Map\" class=\"icon\" (click)=\"cmdHealthDevice(details, 'HCHKR', 'Health')\">\r\n                      <i class=\"icon-ic_health\" aria-hidden=\"true\"></i><span>Health</span>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                      <a title=\"View Vehicle Map\" class=\"icon\" (click)=\"packetDetails(details,'Activation', 'activationPacketData')\">\r\n                        <i class=\"icon-ic_activate_details\" aria-hidden=\"true\"></i><span>View Activation Details</span>\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                        <a title=\"View Vehicle Map\" class=\"icon\" (click)=\"packetDetails(details, 'Health', 'healthPacketData')\">\r\n                          <i class=\"icon-ic_health_details\" aria-hidden=\"true\"></i><span>View Health Details</span>\r\n                        </a>\r\n                      </li>\r\n                </ul>\r\n              </div>\r\n              <!-- <div class=\"actions-menu\">\r\n                  <button type=\"button\" class=\"dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                      <i class=\"icon-ic_more\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu\">\r\n                      <ul>\r\n                          <li>\r\n                      <a title=\"Edit Vehicle Details\" class=\"icon\" (click)=\"deviceDetailspopup(details, 'view')\">\r\n                          <i class=\"icon-ic_view\" aria-hidden=\"true\"></i><span>View Details</span>\r\n                        </a>\r\n                        </li>\r\n                        <li>\r\n                        <a title=\"Download QR Code\" class=\"icon\" (click)=\"deviceDetailspopup(details, 'edit')\">\r\n                            <i class=\"icon-ic_edit\" aria-hidden=\"true\"></i> <span>Edit Details</span>\r\n                          </a>\r\n                        </li>\r\n                        <li>\r\n                          <a title=\"Install Device\" class=\"icon\" (click)=\"cmdHealthDevice(details, 'ACTVR', 'Device Activation')\">\r\n                              <i class=\"icon-ic_activate\" aria-hidden=\"true\"></i><span>Activation</span>\r\n                            </a>\r\n                          </li>\r\n                          <li>\r\n                            <a title=\"View Vehicle Map\" class=\"icon\" (click)=\"cmdHealthDevice(details, 'HCHKR', 'Health')\">\r\n                                <i class=\"icon-ic_health\" aria-hidden=\"true\"></i><span>Health</span>\r\n                              </a>\r\n                            </li>\r\n                            </ul>\r\n                  </div>\r\n                </div> -->\r\n\r\n\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n        <div *ngIf=\"!noData\">\r\n            <div class=\"grid-nodata text-center text-red-medium\">\r\n              <h6>No Data Found</h6>\r\n            </div>\r\n          </div>\r\n      </table>\r\n      <div class=\"row\">\r\n        <div style=\"margin:0px auto;\">\r\n          <pagination-controls *ngIf=\"noData\" id=\"devicedetailspage\" class=\"pagination\" (pageChange)=\"pageChanged($event)\" maxSize=\"6\"\r\n            directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\r\n          </pagination-controls>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/devicemanagement/devices.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/devicemanagement/devices.component.ts ***!
  \*******************************************************/
/*! exports provided: DevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesComponent", function() { return DevicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_services_devicemanagement_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/devicemanagement.api */ "./src/app/common/services/devicemanagement.api.ts");
/* harmony import */ var _deviceactivation_deviceactivation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deviceactivation/deviceactivation.component */ "./src/app/devicemanagement/deviceactivation/deviceactivation.component.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/directives/dateformatter */ "./src/app/common/directives/dateformatter.ts");
/* harmony import */ var _devicedetails_devicedetails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devicedetails/devicedetails.component */ "./src/app/devicemanagement/devicedetails/devicedetails.component.ts");
/* harmony import */ var _common_services_commandmanagement_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/services/commandmanagement.api */ "./src/app/common/services/commandmanagement.api.ts");
/* harmony import */ var _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/services/toaster.service */ "./src/app/common/services/toaster.service.ts");
/* harmony import */ var _packetdetails_packetdetails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./packetdetails/packetdetails.component */ "./src/app/devicemanagement/packetdetails/packetdetails.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DevicesComponent = /** @class */ (function () {
    function DevicesComponent(devicemanagementApiService, modalService, ngbDateFRParserFormatter, commandmanagementApiService, toasterService) {
        this.devicemanagementApiService = devicemanagementApiService;
        this.modalService = modalService;
        this.ngbDateFRParserFormatter = ngbDateFRParserFormatter;
        this.commandmanagementApiService = commandmanagementApiService;
        this.toasterService = toasterService;
        this.showFilters = false;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].pageSize;
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_4__["PageModel"]();
        this.showSearchClear = false;
        this.noData = false;
        this.deviceData = [];
        this.searchValue = '';
    }
    DevicesComponent.prototype.ngOnInit = function () {
        this.getAllDeviceDetails(0, this.pageSize);
    };
    DevicesComponent.prototype.refreshPage = function () {
        this.searchValue = '';
        this.model = undefined;
        this.getAllDeviceDetails(0, this.pageSize);
    };
    DevicesComponent.prototype.cmdHealthDevice = function (device, headerType, messageText) {
        var _this = this;
        var newobj = new Object({
            header: headerType,
            imeiNumber: device.imeiNumber,
        });
        this.commandmanagementApiService.sendActivationRequest(JSON.stringify(newobj))
            .subscribe(function (_data) {
            _this.toasterService.showSuccess('bottom-right', 'Successfully Sent ' + messageText + ' Message.');
        }, function (_error) {
            _this.toasterService.showError('bottom-right', 'ERROR: Unable to Sent ' + messageText + ' Message.');
        });
    };
    DevicesComponent.prototype.packetDetails = function (device, name, type) {
        device.packetType = type;
        device.packetName = name;
        var modalRef = this.modalService.open(_packetdetails_packetdetails_component__WEBPACK_IMPORTED_MODULE_9__["PacketdetailsComponent"], { size: 'lg', backdrop: 'static', keyboard: false });
        modalRef.componentInstance.packetDetails = device;
    };
    DevicesComponent.prototype.activateDevice = function (curDevice) {
        var modalRef = this.modalService.open(_deviceactivation_deviceactivation_component__WEBPACK_IMPORTED_MODULE_3__["DeviceactivationComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.deviceDetails = curDevice;
    };
    DevicesComponent.prototype.changeDate = function () {
        this.getAllDeviceDetails(0, this.pageSize);
    };
    DevicesComponent.prototype.searchData = function () {
        this.getAllDeviceDetails(0, this.pageSize);
        this.showSearchClear = (this.searchValue.length > 4) ? true : false;
    };
    DevicesComponent.prototype.clearSearch = function () {
        this.searchValue = '';
        this.showSearchClear = false;
        this.searchData();
    };
    DevicesComponent.prototype.deviceDetailspopup = function (deviceDetails, eventType) {
        var _this = this;
        deviceDetails.selectedEvent = eventType;
        var modalRef = this.modalService.open(_devicedetails_devicedetails_component__WEBPACK_IMPORTED_MODULE_6__["DevicedetailsComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectedDeviceDetails = deviceDetails;
        modalRef.result.then(function (result) {
            if (result === 'refreshContent') {
                _this.getAllDeviceDetails(0, _this.pageSize);
            }
        }).catch(function (_error) {
        });
    };
    DevicesComponent.prototype.btnShowFilters = function () {
        this.showFilters = !this.showFilters;
    };
    DevicesComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.getAllDeviceDetails(event - 1, this.pageSize);
    };
    DevicesComponent.prototype.getAllDeviceDetails = function (page, size) {
        var _this = this;
        this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
        this.devicemanagementApiService.getDeviceDetails(page, size, this.formatDate, this.searchValue)
            .subscribe(function (data) {
            _this.deviceData = data.content;
            _this.noData = (_this.deviceData.length > 0);
            _this.page = data.page;
        });
    };
    DevicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-devicedetails',
            template: __webpack_require__(/*! ./devices.component.html */ "./src/app/devicemanagement/devices.component.html"),
            styles: [__webpack_require__(/*! ./devices.component.css */ "./src/app/devicemanagement/devices.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_devicemanagement_api__WEBPACK_IMPORTED_MODULE_2__["DeviceManagementServiceApi"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_5__["NgbDateFRParserFormatter"], _common_services_commandmanagement_api__WEBPACK_IMPORTED_MODULE_7__["CommandManagementServiceApi"],
            _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=devicemanagement-devicemanagement-module.js.map