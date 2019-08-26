(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehiclemanagement-vehiclemanagement-module"],{

/***/ "./src/app/vehiclemanagement/vehicledetails.component.css":
/*!****************************************************************!*\
  !*** ./src/app/vehiclemanagement/vehicledetails.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGVtYW5hZ2VtZW50L3ZlaGljbGVkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/vehiclemanagement/vehicledetails.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/vehiclemanagement/vehicledetails.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-t-1\">\n  <div class=\"col-md-10\">\n    <h4>Vehicle Management</h4>\n    <nav aria-label=\"breadcrumb\" class=\"d-none d-sm-block\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\"><a href=\"/dashboard\">Home</a></li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Vehicle Management</li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Vehicle Details</li>\n      </ol>\n    </nav>\n  </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-sm-6 col-md-10 p-t-2\">\n        <span class=\"text-white\">Total Records : {{page.totalElements}}</span>\n      </div>\n  <div class=\"col-md-2 m-b-2 text-right\">\n    <button type=\"button\" class=\"btn-round\" (click)=\"addVehicleDetails('','')\">+ Add Vehicle</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"box-rect-round\">\n      <table class=\"grid-table m-t-3\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Vehicle Number</th>\n            <th>IMEI Number</th>\n            <th>Chassis Number</th>\n            <th>Engine Number</th>\n            <th>Vehicle Make</th>\n            <th>Vehicle Model</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"noData\">\n          <tr *ngFor=\"let details of vehicleDetailsData | paginate: { id: 'vehicledetailspage', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n            <td>{{details.vehicleId}}</td>\n            <td>{{details.vehicleRegNumber}}</td>\n            <td>{{details.imeiNumber}}</td>\n            <td>{{details.chassisNumber}}</td>\n            <td>{{details.engineNumber}}</td>\n            <td>{{details.vehicleMake}}</td>\n            <td>{{details.vehicleModel}}</td>\n            <td>\n              <div class=\"actions-menu dropdown-click\">\n                <button>\n                  <i class=\"icon-ic_more\" aria-hidden=\"true\"></i>\n                </button>\n                <ul>\n                   \n                  <li>\n                    <a title=\"View Vehicle\" class=\"icon\" (click)=\"addVehicleDetails(details, 'view')\">\n                      <i class=\"icon-ic_view\" aria-hidden=\"true\"></i><span>View Details</span>\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"Edit Vehicle\" class=\"icon\" (click)=\"addVehicleDetails(details, 'edit')\">\n                      <i class=\"icon-ic_edit\" aria-hidden=\"true\"></i><span>Edit Vehicle</span>\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"Vehicle Map\" class=\"icon\" (click)=\"viewVehicleMap(details)\">\n                      <i class=\"icon-ic_vehicle_mapping\" aria-hidden=\"true\"></i><span>Vehicle Mapping</span>\n                    </a>\n                  </li>\n                              \n                </ul>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n        <div *ngIf=\"!noData\">\n          <div class=\"grid-nodata text-center text-red-medium\">\n            <h6>No Data Found</h6>\n          </div>\n        </div>\n      </table>\n      <div class=\"row\">\n        <div  style=\"margin:0px auto;\" *ngIf=\"noData\">\n          <pagination-controls id=\"vehicledetailspage\" class=\"pagination\" (pageChange)=\"pageChanged($event)\"\n            maxSize=\"6\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\n          </pagination-controls>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/vehiclemanagement/vehicledetails.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/vehiclemanagement/vehicledetails.component.ts ***!
  \***************************************************************/
/*! exports provided: VehicledetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicledetailsComponent", function() { return VehicledetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _common_services_vehiclemanagement_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/services/vehiclemanagement.api */ "./src/app/common/services/vehiclemanagement.api.ts");
/* harmony import */ var _addeditvehicle_addeditvehicle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addeditvehicle/addeditvehicle.component */ "./src/app/vehiclemanagement/addeditvehicle/addeditvehicle.component.ts");
/* harmony import */ var _vehiclemapping_vehiclemapping_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehiclemapping/vehiclemapping.component */ "./src/app/vehiclemanagement/vehiclemapping/vehiclemapping.component.ts");
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







var VehicledetailsComponent = /** @class */ (function () {
    function VehicledetailsComponent(vehicleDetailsApi, modalService) {
        this.vehicleDetailsApi = vehicleDetailsApi;
        this.modalService = modalService;
        this.vehicleDetailsData = [];
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_2__["PageModel"]();
        this.noData = false;
    }
    VehicledetailsComponent.prototype.ngOnInit = function () {
        this.getVehicleDetails(0, 10);
    };
    VehicledetailsComponent.prototype.viewVehicleMap = function (details) {
        var _this = this;
        var modalRef = this.modalService.open(_vehiclemapping_vehiclemapping_component__WEBPACK_IMPORTED_MODULE_5__["VehiclemappingComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.VehicleMapDetails = details;
        modalRef.result.then(function (result) {
            if (result === 'refreshContent') {
                _this.getVehicleDetails(0, _this.pageSize);
            }
        }).catch(function (_error) {
        });
    };
    VehicledetailsComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.getVehicleDetails(event - 1, this.pageSize);
    };
    VehicledetailsComponent.prototype.addVehicleDetails = function (details, action) {
        var _this = this;
        if (action !== undefined && action !== '') {
            details.action = action;
        }
        var modalRef = this.modalService.open(_addeditvehicle_addeditvehicle_component__WEBPACK_IMPORTED_MODULE_4__["AddeditvehicleComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectVehicleDetails = details;
        modalRef.result.then(function (result) {
            if (result === 'refreshContent') {
                _this.getVehicleDetails(0, _this.pageSize);
            }
        }).catch(function (_error) {
        });
    };
    VehicledetailsComponent.prototype.getVehicleDetails = function (page, size) {
        var _this = this;
        this.vehicleDetailsApi.getAllVehicleDetails(page, size)
            .subscribe(function (data) {
            _this.vehicleDetailsData = data.content;
            _this.noData = (_this.vehicleDetailsData.length > 0);
            _this.page = data.page;
            console.log(_this.vehicleDetailsData);
        });
    };
    VehicledetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicledetails',
            template: __webpack_require__(/*! ./vehicledetails.component.html */ "./src/app/vehiclemanagement/vehicledetails.component.html"),
            styles: [__webpack_require__(/*! ./vehicledetails.component.css */ "./src/app/vehiclemanagement/vehicledetails.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_vehiclemanagement_api__WEBPACK_IMPORTED_MODULE_3__["VehicleManagementServiceApi"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], VehicledetailsComponent);
    return VehicledetailsComponent;
}());



/***/ }),

/***/ "./src/app/vehiclemanagement/vehiclemanagement-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/vehiclemanagement/vehiclemanagement-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: VehiclemanagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclemanagementRoutingModule", function() { return VehiclemanagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vehicledetails_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehicledetails.component */ "./src/app/vehiclemanagement/vehicledetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _vehicledetails_component__WEBPACK_IMPORTED_MODULE_2__["VehicledetailsComponent"], }
];
var VehiclemanagementRoutingModule = /** @class */ (function () {
    function VehiclemanagementRoutingModule() {
    }
    VehiclemanagementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VehiclemanagementRoutingModule);
    return VehiclemanagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/vehiclemanagement/vehiclemanagement.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/vehiclemanagement/vehiclemanagement.module.ts ***!
  \***************************************************************/
/*! exports provided: VehiclemanagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclemanagementModule", function() { return VehiclemanagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _vehicledetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicledetails.component */ "./src/app/vehiclemanagement/vehicledetails.component.ts");
/* harmony import */ var _vehiclemanagement_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehiclemanagement-routing.module */ "./src/app/vehiclemanagement/vehiclemanagement-routing.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var VehiclemanagementModule = /** @class */ (function () {
    function VehiclemanagementModule() {
    }
    VehiclemanagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_vehicledetails_component__WEBPACK_IMPORTED_MODULE_3__["VehicledetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _vehiclemanagement_routing_module__WEBPACK_IMPORTED_MODULE_4__["VehiclemanagementRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
            ],
        })
    ], VehiclemanagementModule);
    return VehiclemanagementModule;
}());



/***/ })

}]);
//# sourceMappingURL=vehiclemanagement-vehiclemanagement-module.js.map