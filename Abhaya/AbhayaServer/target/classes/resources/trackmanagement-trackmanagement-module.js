(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trackmanagement-trackmanagement-module"],{

/***/ "./src/app/common/services/routedeviation.api.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/services/routedeviation.api.ts ***!
  \*******************************************************/
/*! exports provided: RouteDeviationServiceApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteDeviationServiceApi", function() { return RouteDeviationServiceApi; });
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



var RouteDeviationServiceApi = /** @class */ (function () {
    function RouteDeviationServiceApi(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'my-auth-token'
            })
        };
    }
    RouteDeviationServiceApi.prototype.getrouteDetails = function (page, size, searchDate, searchValue) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/routeDeviation";
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue;
        return this.httpClient.get(url);
    };
    RouteDeviationServiceApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RouteDeviationServiceApi);
    return RouteDeviationServiceApi;
}());



/***/ }),

/***/ "./src/app/common/services/tripnamagement.api.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/services/tripnamagement.api.ts ***!
  \*******************************************************/
/*! exports provided: TripManagementServiceApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripManagementServiceApi", function() { return TripManagementServiceApi; });
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



var TripManagementServiceApi = /** @class */ (function () {
    function TripManagementServiceApi(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'my-auth-token'
            })
        };
    }
    TripManagementServiceApi.prototype.getAllTripDetails = function (page, size, searchDate, searchValue, tripClosed, isGeoFencing) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/tripDetails";
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&imeiNumber=" + searchValue;
        url += "&isTripClosed=" + tripClosed + "&identifier=" + isGeoFencing;
        return this.httpClient.get(url);
    };
    TripManagementServiceApi.prototype.getTripById = function (tripId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/tripDetails";
        url += "?tripId=" + tripId;
        return this.httpClient.get(url);
    };
    TripManagementServiceApi.prototype.endTrip = function (tripDetails) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/endTrip";
        return this.httpClient.post(url, tripDetails, this.httpOptions);
    };
    TripManagementServiceApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TripManagementServiceApi);
    return TripManagementServiceApi;
}());



/***/ }),

/***/ "./src/app/trackmanagement/routedeviation/routedeviation.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/trackmanagement/routedeviation/routedeviation.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWNrbWFuYWdlbWVudC9yb3V0ZWRldmlhdGlvbi9yb3V0ZWRldmlhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/trackmanagement/routedeviation/routedeviation.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/trackmanagement/routedeviation/routedeviation.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-t-1 page-header\">\n    <div class=\"col-md-10\">\n      <h4>Route Deviation</h4>\n      <nav aria-label=\"breadcrumb\" class=\"d-none d-sm-block\">\n          <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\">Home</a></li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">Track Management</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">Route Deviation</li>\n          </ol>\n        </nav>\n    </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-9 col-sm-10 col-md-10 p-t-3\">\n        <span class=\"text-white\">Total Records : {{page.totalElements}}</span>\n      </div>\n      <div class=\"col-3 col-sm-2 col-md-2 text-right\">\n          <button type=\"button\" class=\"btn-refresh\" (click)=\"refreshPage()\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n          </button>\n         <button type=\"button\" class=\"btn-search\" (click)=\"btnShowFilters()\"><i class=\"icon-ic_searchfilter\"></i></button>\n      </div>\n    </div>\n    <div class=\"row page-filters\" [ngClass]=\"{'show': showFilters == true}\">\n        <div class=\"col-md-12\">\n          <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-3\"></div>\n              <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search By IMEI No\"  [(ngModel)]=\"searchValue\"\n                    (keyup)=\"searchData();\">\n                    <!-- <button type=\"button\" class=\"btn-close close\">\n                      <span aria-hidden=\"true\"  (click)=\"clearSearch();\" *ngIf=\"showSearchClear\">&times;</span>\n                    </button> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group-append datepicker\">\n                        <input type=\"text\" class=\"form-control\" readOnly placeholder=\"Start Date\" name=\"dp\"\n                        [(ngModel)]=\"model\" (dateSelect)=\"changeDate();\" ngbDatepicker #d=\"ngbDatepicker\">\n                        <button style=\"outline:none\" class=\"btn-cal calendar\" (click)=\"d.toggle()\" type=\"button\"><i class=\"fa fa-calendar\"\n                          aria-hidden=\"true\"></i></button>\n                      </div>\n                    </div>\n                  </div>\n              </div>\n         </div>\n     </div>\n     <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"box-rect-round o-x-auto\">\n            <table class=\"grid-table m-t-3\">\n              <thead>\n                <tr>\n                  <th>ID</th>\n                  <th>Created Date</th>\n                  <th>Deviation Time</th>\n                  <th>Lat Lang</th>\n                  <th width=\"250\">Location</th>\n                  <th>IMEI Number</th>\n                  <th>Trip Id</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"noData\">\n                <tr *ngFor=\"let details of routeDevDetails  | paginate: { id: 'routedetailspages', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n                  <td>{{details.deviationId}}</td>\n                  <td>{{details.createdDate}}</td>\n                  <td>{{details.deviationTime}}</td>\n                  <td>{{details.latLang}}</td>\n                  <td>{{details.location}}</td>\n                  <td>{{details.imeiNumber}}</td>\n                  <td>{{details.tripId}}</td>\n                 \n                  <!-- <td (click)=\"rawDataDetails(details)\">\n                      <div class='actions-menu'>\n                          <button>\n                            <i class=\"icon-ic_more\" aria-hidden=\"true\"></i>\n                          </button></div></td> -->\n                </tr>\n              </tbody>\n              <div *ngIf=\"!noData\">\n                  <div class=\"grid-nodata text-center text-red-medium\">\n                    <h6>No Data Found</h6>\n                  </div>\n                </div>\n            </table>\n            </div>\n            </div>\n            </div>\n"

/***/ }),

/***/ "./src/app/trackmanagement/routedeviation/routedeviation.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/trackmanagement/routedeviation/routedeviation.component.ts ***!
  \****************************************************************************/
/*! exports provided: RoutedeviationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutedeviationComponent", function() { return RoutedeviationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/directives/dateformatter */ "./src/app/common/directives/dateformatter.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _common_services_routedeviation_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/routedeviation.api */ "./src/app/common/services/routedeviation.api.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoutedeviationComponent = /** @class */ (function () {
    function RoutedeviationComponent(RouteDeviationApi, ngbDateFRParserFormatter) {
        this.RouteDeviationApi = RouteDeviationApi;
        this.ngbDateFRParserFormatter = ngbDateFRParserFormatter;
        this.routeDevDetails = [];
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].pageSize;
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_2__["PageModel"]();
        this.showSearchClear = false;
        this.pageSizeValues = [];
        this.showFilters = false;
        this.noData = false;
        this.pageSizeValues = [10, 50, 100, 200];
        this.pageSizeCount = 10;
        this.searchValue = '';
    }
    RoutedeviationComponent.prototype.ngOnInit = function () {
        this.getAllRouteDetails(0, this.pageSize);
    };
    RoutedeviationComponent.prototype.refreshPage = function () {
        this.searchValue = '';
        this.model = undefined;
        this.getAllRouteDetails(0, this.pageSize);
    };
    RoutedeviationComponent.prototype.btnShowFilters = function () {
        this.showFilters = !this.showFilters;
    };
    RoutedeviationComponent.prototype.changeDate = function () {
        this.getAllRouteDetails(0, this.pageSizeCount);
    };
    RoutedeviationComponent.prototype.searchData = function () {
        this.getAllRouteDetails(0, this.pageSize);
        this.showSearchClear = (this.searchValue.length > 4) ? true : false;
    };
    RoutedeviationComponent.prototype.clearSearch = function () {
        this.searchValue = '';
        this.showSearchClear = false;
        this.searchData();
    };
    RoutedeviationComponent.prototype.changePageSize = function () {
        this.getAllRouteDetails(0, this.pageSizeCount);
    };
    RoutedeviationComponent.prototype.getAllRouteDetails = function (page, size) {
        var _this = this;
        this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
        this.RouteDeviationApi.getrouteDetails(page, size, this.formatDate, this.searchValue)
            .subscribe(function (data) {
            _this.routeDevDetails = data.content;
            _this.noData = (_this.routeDevDetails.length > 0);
            _this.page = data.page;
            console.log(_this.routeDevDetails);
        });
    };
    RoutedeviationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-routedeviation',
            template: __webpack_require__(/*! ./routedeviation.component.html */ "./src/app/trackmanagement/routedeviation/routedeviation.component.html"),
            styles: [__webpack_require__(/*! ./routedeviation.component.css */ "./src/app/trackmanagement/routedeviation/routedeviation.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_routedeviation_api__WEBPACK_IMPORTED_MODULE_3__["RouteDeviationServiceApi"], _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_1__["NgbDateFRParserFormatter"]])
    ], RoutedeviationComponent);
    return RoutedeviationComponent;
}());



/***/ }),

/***/ "./src/app/trackmanagement/trackdevice.component.css":
/*!***********************************************************!*\
  !*** ./src/app/trackmanagement/trackdevice.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWNrbWFuYWdlbWVudC90cmFja2RldmljZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/trackmanagement/trackdevice.component.html":
/*!************************************************************!*\
  !*** ./src/app/trackmanagement/trackdevice.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-t-1\">\n    <div class=\"col-md-10\">\n      <h4>Device Tracking</h4>\n      <nav aria-label=\"breadcrumb\" class=\"d-none d-sm-block\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Device Tracking</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-9 col-sm-10 col-md-11 p-t-3\">\n      </div>\n      <div class=\"col-3 col-sm-2 col-md-1 text-right\">\n         <button type=\"button\" class=\"btn-search\" (click)=\"btnShowFilters()\"><i class=\"icon-ic_searchfilter\"></i></button>\n      </div>\n    </div>\n    <div class=\"row page-filters\" [ngClass]=\"{'show': showFilters == true}\">\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n          <div class=\"col-md-3 p-r-0\"></div>\n          <div class=\"col-md-3 p-r-0\"></div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n                <select class=\"form-control\" [(ngModel)]=\"imeiNumber\"  name=\"imeiNumber\" (change)=\"changeImei()\">\n                    <option value=\"\">Select IMEI Number</option>\n                <option *ngFor=\"let vehicle of liveVehicleArray\" value=\"{{vehicle.imeiNumber}}\">{{vehicle.imeiNumber}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <div class=\"input-group-append datepicker\">\n                <input type=\"text\" class=\"form-control\" readOnly placeholder=\"yyyy-mm-dd\" name=\"dp\"\n                  [(ngModel)]=\"model\" (dateSelect)=\"changeDate();\" ngbDatepicker #d=\"ngbDatepicker\">\n                <button style=\"outline:none\" class=\"btn-cal calendar\" (click)=\"d.toggle()\" type=\"button\"> <i class=\"fa fa-calendar\"\n                    aria-hidden=\"true\"></i></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n  \n  <div class=\"row\">\n    \n  \n    \n    \n      <div id=\"googleMap\" class=\"google_map_align p-l-3 p-r-3\"*ngIf=\"devicetrack == true\">\n          <agm-map [zoom]=\"mapZoom\" [latitude]=\"lat\" [longitude]=\"lng\">\n              <agm-direction *ngIf=\"showDirection == true\" [origin]=\"origin\" [destination]=\"destination\" [renderOptions]=\"renderOpts\"\n              [markerOptions]=\"markerOpts\" [waypoints]=\"waypoints\"></agm-direction>\n          </agm-map>\n        </div>\n\n\n\n\n        <!-- <div id=\"googleMap\" class=\"google_map_align p-l-3 p-r-3\" *ngIf=\"devicetrack == false\">\n            <agm-map [zoom]=\"11\" [latitude]=\"lat\" [longitude]=\"lng\" [disableDefaultUI]=\"false\" [zoomControl]=\"false\" (mapClick)=\"mapClicked($event)\" (mapReady)=\"mapReady($event)\">\n                <agm-marker *ngFor=\"let m of liveVehicleArray; let i = index\" (markerClick)=\"clickedMarker(m.rcNumber, i, $event)\" [latitude]=\"m.latitude\"\n                [longitude]=\"m.langitude\" [label]=\"\" [markerDraggable]=\"false\" [iconUrl]=\"m.image\" (dragEnd)=\"markerDragEnd(m, $event)\">\n                <agm-info-window>\n                    <div class=\"map-tool-tip\">\n                        <h6>Vehicle No: <span>{{m.vehicleRegNo}}</span></h6><br>\n                        <h6>IMEI No: <span>{{m.imeiNumber}}</span></h6><br>\n                        <h6>Location: <span>{{m.location}}</span></h6>\n                    </div>\n                </agm-info-window>\n              </agm-marker>\n            </agm-map>\n          </div> -->\n\n\n  </div>"

/***/ }),

/***/ "./src/app/trackmanagement/trackdevice.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/trackmanagement/trackdevice.component.ts ***!
  \**********************************************************/
/*! exports provided: TrackdeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackdeviceComponent", function() { return TrackdeviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_services_devicemanagement_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/services/devicemanagement.api */ "./src/app/common/services/devicemanagement.api.ts");
/* harmony import */ var _common_services_dashboard_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/services/dashboard.api */ "./src/app/common/services/dashboard.api.ts");
/* harmony import */ var _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/directives/dateformatter */ "./src/app/common/directives/dateformatter.ts");
/* harmony import */ var _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/services/toaster.service */ "./src/app/common/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TrackdeviceComponent = /** @class */ (function () {
    function TrackdeviceComponent(calendar, devicemanagementApiService, deviceTrackingApi, ngbDateFRParserFormatter, activatedRoute, toasterService) {
        this.calendar = calendar;
        this.devicemanagementApiService = devicemanagementApiService;
        this.deviceTrackingApi = deviceTrackingApi;
        this.ngbDateFRParserFormatter = ngbDateFRParserFormatter;
        this.activatedRoute = activatedRoute;
        this.toasterService = toasterService;
        this.showFilters = true;
        this.devicetrack = true;
        this.showDirection = false;
        this.lat = 17.3850;
        this.lng = 78.4867;
        this.mapZoom = 9;
        this.iconURL = '/assets/images/ic_auto_yellow.png';
        this.renderOpts = { suppressMarkers: true };
        this.waypoints = [];
        this.markerOpts = {
            origin: { icon: '../../../assets/images/source.png' },
            destination: { icon: '../../../assets/images/dest.png', label: 'marker label', opacity: 0.8 }
        };
        this.liveVehicleArray = [];
        this.gMaps = _agm_core__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"];
        this.model = this.calendar.getToday();
        this.searchValue = '';
        this.imeiNumber = '';
    }
    TrackdeviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.imeiNumber = (params['imeiNumber'] !== undefined) ? params['imeiNumber'] : '';
        });
        this.getLiveVehicles();
        this.origin = { lat: .0000, lng: .0000 };
        this.destination = { lat: .0000, lng: .0000 };
        this.changeImei();
    };
    TrackdeviceComponent.prototype.btnShowFilters = function () {
        this.showFilters = !this.showFilters;
    };
    TrackdeviceComponent.prototype.changeImei = function () {
        if (this.imeiNumber !== '') {
            this.getdeviceTrackData();
        }
        else {
            this.mapZoom = 10;
            this.showDirection = false;
        }
    };
    TrackdeviceComponent.prototype.mapReady = function (map) {
        this.map = map;
    };
    TrackdeviceComponent.prototype.clickedMarker = function (label, index, $event) {
        this.lat = $event.latitude;
        this.lng = $event.longitude;
        this.map.setCenter({ lat: $event.latitude, lng: $event.longitude });
        var position = new google.maps.LatLng($event.latitude, $event.longitude);
        this.map.panTo(position);
        this.map.setZoom(15);
    };
    TrackdeviceComponent.prototype.getLiveVehicles = function () {
        var _this = this;
        this.devicemanagementApiService.getliveDevices().subscribe(function (data) {
            _this.liveVehicleArray = data.content;
        });
    };
    TrackdeviceComponent.prototype.prepareDatatoDispaly = function () {
        for (var current = 0; current < this.liveVehicleArray.length; current++) {
            var curLiveVehicle = this.liveVehicleArray[current];
            var oldposition = new google.maps.LatLng(curLiveVehicle.prevLatitude, curLiveVehicle.prevLangitude);
            var newposition = new google.maps.LatLng(curLiveVehicle.latitude, curLiveVehicle.langitude);
            var angle = google.maps.geometry.spherical.computeHeading(oldposition, newposition);
            angle = Math.round(angle);
            angle = Math.ceil(angle / 5) * 5;
            if (angle > 180) {
                angle = 180;
            }
            if (angle < -180) {
                angle = -180;
            }
        }
    };
    TrackdeviceComponent.prototype.getdeviceTrackData = function () {
        var _this = this;
        this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
        this.deviceTrackingApi.getTrackingDetails(this.imeiNumber, this.formatDate)
            .subscribe(function (data) {
            _this.devicetracking = data.content;
            var lastobj = _this.devicetracking.length - 1;
            _this.waypoints = [];
            var loop;
            if (_this.devicetracking.length !== 0) {
                _this.origin = { lat: Number(_this.devicetracking[lastobj].latitude),
                    lng: Number(_this.devicetracking[lastobj].langitude) };
                _this.destination = { lat: Number(_this.devicetracking[0].latitude), lng: Number(_this.devicetracking[0].langitude) };
                if (_this.origin.lat !== 0 && _this.origin.lng !== 0 && _this.destination.lat !== 0 && _this.destination.lng !== 0) {
                    for (loop = 0; loop < 23; loop++) {
                        _this.waypoints.push({
                            location: { lat: Number(_this.devicetracking[loop].latitude),
                                lng: Number(_this.devicetracking[loop].langitude) },
                            stopover: true
                        });
                        _this.mapZoom = 12;
                    }
                    _this.showDirection = true;
                    _this.devicetrack = true;
                }
                else {
                    // clearInterval(this.getVehicle);
                    _this.toasterService.showError('bottom-right', 'ERROR: No Tracking Data available for this IMEI Number : ' + _this.imeiNumber);
                    _this.mapZoom = 10;
                    _this.showDirection = false;
                }
            }
            else {
                // clearInterval(this.getVehicle);
                _this.toasterService.showError('bottom-right', 'ERROR: No Tracking Data available for this IMEI Number : ' + _this.imeiNumber);
                _this.mapZoom = 10;
                _this.showDirection = false;
            }
        });
    };
    TrackdeviceComponent.prototype.ngOnDestroy = function () {
        // clearInterval(this.getVehicle);
    };
    TrackdeviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trackdevice',
            template: __webpack_require__(/*! ./trackdevice.component.html */ "./src/app/trackmanagement/trackdevice.component.html"),
            styles: [__webpack_require__(/*! ./trackdevice.component.css */ "./src/app/trackmanagement/trackdevice.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"], _common_services_devicemanagement_api__WEBPACK_IMPORTED_MODULE_4__["DeviceManagementServiceApi"],
            _common_services_dashboard_api__WEBPACK_IMPORTED_MODULE_5__["DashboardServiceApi"], _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_6__["NgbDateFRParserFormatter"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]])
    ], TrackdeviceComponent);
    return TrackdeviceComponent;
}());



/***/ }),

/***/ "./src/app/trackmanagement/trackmanagement-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/trackmanagement/trackmanagement-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: TrackmanagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackmanagementRoutingModule", function() { return TrackmanagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tripcreate_tripcreate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tripcreate/tripcreate.component */ "./src/app/trackmanagement/tripcreate/tripcreate.component.ts");
/* harmony import */ var _tripdetails_tripdetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tripdetails/tripdetails.component */ "./src/app/trackmanagement/tripdetails/tripdetails.component.ts");
/* harmony import */ var _routedeviation_routedeviation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routedeviation/routedeviation.component */ "./src/app/trackmanagement/routedeviation/routedeviation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { TrackdeviceComponent } from './trackdevice.component';



var routes = [
    { path: '', redirectTo: 'tripcreate', pathMatch: 'full' },
    //{ path: 'trackdevice', component: TrackdeviceComponent, },
    { path: 'tripcreate', component: _tripcreate_tripcreate_component__WEBPACK_IMPORTED_MODULE_2__["TripcreateComponent"], },
    { path: 'tripdetails', component: _tripdetails_tripdetails_component__WEBPACK_IMPORTED_MODULE_3__["TripdetailsComponent"] },
    { path: 'routedeviation', component: _routedeviation_routedeviation_component__WEBPACK_IMPORTED_MODULE_4__["RoutedeviationComponent"] }
];
var TrackmanagementRoutingModule = /** @class */ (function () {
    function TrackmanagementRoutingModule() {
    }
    TrackmanagementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TrackmanagementRoutingModule);
    return TrackmanagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/trackmanagement/trackmanagement.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/trackmanagement/trackmanagement.module.ts ***!
  \***********************************************************/
/*! exports provided: TrackmanagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackmanagementModule", function() { return TrackmanagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm5/agm-direction.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _trackdevice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trackdevice.component */ "./src/app/trackmanagement/trackdevice.component.ts");
/* harmony import */ var _trackmanagement_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trackmanagement-routing.module */ "./src/app/trackmanagement/trackmanagement-routing.module.ts");
/* harmony import */ var _tripcreate_tripcreate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tripcreate/tripcreate.component */ "./src/app/trackmanagement/tripcreate/tripcreate.component.ts");
/* harmony import */ var _tripdetails_tripdetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tripdetails/tripdetails.component */ "./src/app/trackmanagement/tripdetails/tripdetails.component.ts");
/* harmony import */ var _routedeviation_routedeviation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routedeviation/routedeviation.component */ "./src/app/trackmanagement/routedeviation/routedeviation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var TrackmanagementModule = /** @class */ (function () {
    function TrackmanagementModule() {
    }
    TrackmanagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_trackdevice_component__WEBPACK_IMPORTED_MODULE_7__["TrackdeviceComponent"], _tripcreate_tripcreate_component__WEBPACK_IMPORTED_MODULE_9__["TripcreateComponent"], _tripdetails_tripdetails_component__WEBPACK_IMPORTED_MODULE_10__["TripdetailsComponent"], _routedeviation_routedeviation_component__WEBPACK_IMPORTED_MODULE_11__["RoutedeviationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                agm_direction__WEBPACK_IMPORTED_MODULE_4__["AgmDirectionModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"],
                _trackmanagement_routing_module__WEBPACK_IMPORTED_MODULE_8__["TrackmanagementRoutingModule"]
            ]
        })
    ], TrackmanagementModule);
    return TrackmanagementModule;
}());



/***/ }),

/***/ "./src/app/trackmanagement/tripcreate/tripcreate.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/trackmanagement/tripcreate/tripcreate.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-frame{\r\n    width:100%;\r\n    height:calc(100vh - 190px);\r\n    overflow: hidden!important;\r\n    border:0px;\r\n}\r\n.floating-btn{\r\n    margin:0;\r\n    padding:0;\r\n    position: absolute;\r\n    z-index: 9;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhY2ttYW5hZ2VtZW50L3RyaXBjcmVhdGUvdHJpcGNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC90cmFja21hbmFnZW1lbnQvdHJpcGNyZWF0ZS90cmlwY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWZyYW1le1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDpjYWxjKDEwMHZoIC0gMTkwcHgpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6MHB4O1xyXG59XHJcbi5mbG9hdGluZy1idG57XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/trackmanagement/tripcreate/tripcreate.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/trackmanagement/tripcreate/tripcreate.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-t-1 \">\n  <div class=\"col-md-10\">\n    <h4>{{pageTitle}}</h4>\n    <nav aria-label=\"breadcrumb\" class=\"d-none d-sm-block\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\">Home</a></li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Trip Management</li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">{{pageTitle}}</li>\n      </ol>\n    </nav>\n  </div>\n</div>\n<div class=\"box-rect-round\">\n  <div class=\"row\">\n    <div class=\"col-md-3\" *ngIf=\"showDetails\">\n        <div>\n            <div class=\"row map-view p-a-3\" *ngFor=\"let tripData of tripDetailsData\">\n                <div class=\"m-t-2\">\n                <h6>Trip Type :</h6>\n                <h6><span>{{tripData.identifier}}</span></h6>\n                </div>\n               <div class=\"col-md-12 p-a-0 m-t-2\">\n                  <h6>IMEI No : </h6>\n                  <h6><span>{{tripData.imeiNumber}}</span></h6>\n                </div>\n              <div class=\"m-t-2\">\n                <h6>Source :</h6>\n                <h6><span>{{tripData.sourceLocation}}</span></h6> \n              </div>\n             \n              <div class=\"m-t-2\" *ngIf=\"!isGeoFencing\">\n                <h6>Destination : </h6>\n                <h6><span>{{tripData.destiLocation}}</span></h6>\n              </div>\n              <div class=\"m-t-2\" *ngIf=\"isGeoFencing\">\n                <h6>Radius : </h6>\n                <h6><span>{{tripData.radius}}</span></h6>\n              </div>\n            </div>\n          </div>\n          <div class=\"floating-btn form-group\" *ngIf=\"!endTripBtn\">\n              <button type=\"button\" (click)=\"endTrip()\" class=\"btn-primary m-t-1\">End Trip</button>\n            </div>\n    </div>\n    <div class=\"col-md-9\" [ngClass]=\"{'col-md-12' : !showDetails}\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n              <iframe [src]=\"url\" class=\"map-frame\"></iframe>\n            </div>\n          </div>\n    </div>\n  </div>\n \n\n  \n  \n</div>"

/***/ }),

/***/ "./src/app/trackmanagement/tripcreate/tripcreate.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/trackmanagement/tripcreate/tripcreate.component.ts ***!
  \********************************************************************/
/*! exports provided: TripcreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripcreateComponent", function() { return TripcreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/toaster.service */ "./src/app/common/services/toaster.service.ts");
/* harmony import */ var _common_services_tripnamagement_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/tripnamagement.api */ "./src/app/common/services/tripnamagement.api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TripcreateComponent = /** @class */ (function () {
    function TripcreateComponent(sanitizer, router, toasterService, activatedRoute, tripdetailsApi) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.toasterService = toasterService;
        this.activatedRoute = activatedRoute;
        this.tripdetailsApi = tripdetailsApi;
        this.pageTitle = 'Create New Trip';
        this.showFilters = false;
        this.showDetails = false;
        this.endTripBtn = true;
        this.isGeoFencing = false;
    }
    TripcreateComponent.prototype.onMessage = function (event) {
        this.dataFromIframe = event.data.message;
        if (this.dataFromIframe !== undefined) {
            if (this.dataFromIframe === 'Success') {
                this.toasterService.showSuccess('bottom-right', 'Successfully created a Trip');
                this.router.navigate(['tripmanagement/tripdetails']);
            }
            else {
                this.toasterService.showError('bottom-right', 'ERROR: Unable to create a Trip');
            }
        }
    };
    TripcreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.tripId = params['tripId'];
            var dynamicUrl = 'http://14.98.164.17:8099/index.html';
            // let dynamicUrl = 'http://www.srinivaspolishetty.com/if/index.html';
            dynamicUrl = (_this.tripId !== undefined) ? dynamicUrl + "?tripId=" + _this.tripId : dynamicUrl;
            _this.url = _this.sanitizer.bypassSecurityTrustResourceUrl(dynamicUrl);
            _this.showDetails = (_this.tripId !== undefined) ? true : false;
            _this.pageTitle = (_this.tripId !== undefined) ? 'View Trip' : 'Create New Trip';
        });
        if (this.tripId !== undefined) {
            this.getTripDetails();
            this.pageTitle = 'View Trip';
            this.showDetails = true;
        }
    };
    TripcreateComponent.prototype.btnShowFilters = function () {
        this.showFilters = !this.showFilters;
    };
    TripcreateComponent.prototype.endTrip = function () {
        var _this = this;
        var newobj = new Object({ imeiNumber: this.tripDetailsData[0].imeiNumber });
        this.tripdetailsApi.endTrip(JSON.stringify(newobj)).subscribe(function (_data) {
            _this.toasterService.showSuccess('bottom-right', 'Trip has been successfully closed ');
            _this.router.navigate(['tripmanagement/tripdetails']);
        }, function (_error) {
            _this.toasterService.showError('bottom-right', 'ERROR: Unable to close the Trip.');
        });
    };
    TripcreateComponent.prototype.getTripDetails = function () {
        var _this = this;
        this.tripdetailsApi.getTripById(this.tripId)
            .subscribe(function (data) {
            _this.tripDetailsData = data.content;
            _this.endTripBtn = _this.tripDetailsData[0].tripClosed;
            _this.isGeoFencing = (_this.tripDetailsData[0].identifier === 'GEOFENCING') ? true : false;
            console.log(_this.tripDetailsData);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:message', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TripcreateComponent.prototype, "onMessage", null);
    TripcreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tripcreate',
            template: __webpack_require__(/*! ./tripcreate.component.html */ "./src/app/trackmanagement/tripcreate/tripcreate.component.html"),
            styles: [__webpack_require__(/*! ./tripcreate.component.css */ "./src/app/trackmanagement/tripcreate/tripcreate.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _common_services_tripnamagement_api__WEBPACK_IMPORTED_MODULE_4__["TripManagementServiceApi"]])
    ], TripcreateComponent);
    return TripcreateComponent;
}());



/***/ }),

/***/ "./src/app/trackmanagement/tripdetails/tripdetails.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/trackmanagement/tripdetails/tripdetails.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWNrbWFuYWdlbWVudC90cmlwZGV0YWlscy90cmlwZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/trackmanagement/tripdetails/tripdetails.component.html":
/*!************************************************************************!*\
  !*** ./src/app/trackmanagement/tripdetails/tripdetails.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-t-1\">\n  <div class=\"col-md-10\">\n    <h4>Trip Details</h4>\n    <nav aria-label=\"breadcrumb\" class=\"d-none d-sm-block\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Trip Management</li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Trip Details</li>\n      </ol>\n    </nav>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-4 col-md-4 p-t-3\">\n    <span class=\"text-white\">Total Records : {{page.totalElements}} </span>\n  </div>\n  <div class=\"col-md-8 text-right p-a-0\">\n    <div class=\"float-right\">\n\n\n      <div class=\"switch-toggle p-t-1\">\n      <div class=\"onoffswitch\">\n          <input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" (click)=\"openclosedTrips()\" id=\"myonoffswitch\" checked>\n          <label class=\"onoffswitch-label\" for=\"myonoffswitch\">\n              <span class=\"onoffswitch-inner\"></span>\n              <span class=\"onoffswitch-switch\"></span>\n          </label>\n      </div>\n    </div>\n\n\n    <div class=\"switch-toggle2 p-t-1\">\n      <button  [ngClass]=\"{'active': tripType == 'TRIP'}\" type=\"button\" class=\"btn btn-left\" (click)=\"changeTripType('TRIP')\">Trips</button>\n      <button [ngClass]=\"{'active': tripType == 'GEOFENCING' }\" type=\"button\" class=\"btn btn-right\" (click)=\"changeTripType('GEOFENCING')\">Geofencing</button>\n    </div>\n\n\n    <div class=\"switch-search\">\n      <span>\n          <!-- <button type=\"button\" class=\"btn-refresh\" (click)=\"refreshPage()\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n          </button> -->\n        <button type=\"button\" class=\"btn-search\" (click)=\"btnShowFilters()\"><i class=\"icon-ic_searchfilter\"></i></button>\n      </span>\n    </div>\n\n\n    </div>\n  </div>\n</div>\n<div class=\"row page-filters\" [ngClass]=\"{'show': showFilters == true}\">\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search By IMEI No\"  [(ngModel)]=\"searchValue\"\n          (keyup)=\"searchData();\">\n          <button type=\"button\" class=\"btn-close close\" aria-label=\"Close\">\n            <span aria-hidden=\"true\" (click)=\"clearSearch();\" *ngIf=\"showSearchClear\">&times;</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"col-md-3   \">\n        <div class=\"form-group\">\n          <div class=\"input-group-append datepicker\">\n            <input type=\"text\" class=\"form-control\" readOnly placeholder=\"yyyy-mm-dd\" name=\"dp\"\n            [(ngModel)]=\"model\" (dateSelect)=\"changeDate();\" ngbDatepicker #d=\"ngbDatepicker\">\n            <button style=\"outline:none\" class=\"btn-cal calendar\"\n              (click)=\"d.toggle()\" type=\"button\"> <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"box-rect-round\">\n      <table class=\"grid-table m-t-3\">\n        <thead>\n          <tr>\n            <th>Trip ID</th>\n            <th>IMEI No</th>\n            <th width=\"280\">Source</th>\n            <th>Destination</th>\n            <th>Status</th>\n            <th width=\"160\">Date</th>\n            <th width=\"80\">Trip Type</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"noData\">\n          <tr *ngFor=\"let details of tripDetailsData | paginate: { id: 'tripdetailspage', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n            <td>{{details.tripId}}</td>\n            <td>{{details.imeiNumber}}</td>\n            <td>{{details.sourceLocation}}</td>\n            <td>{{details.destiLocation}}</td>\n            <td *ngIf=\"details.tripClosed\">Closed</td>\n            <td *ngIf=\"!details.tripClosed\">Open</td>\n            <td>{{details.createdDate}}</td>\n            <td>{{details.identifier}}</td>\n            <td>\n              <div class=\"actions-menu dropdown-click\">\n                <button>\n                  <i class=\"icon-ic_more\" aria-hidden=\"true\"></i>\n                </button>\n                <ul>\n                  <li>\n                    <a title=\"View Location Details\" class=\"icon\" (click)=\"viewTrip(details)\">\n                      <i class=\"icon-ic_view\" aria-hidden=\"true\"></i><span>View Details</span>\n                    </a>\n                  </li>\n                  <li *ngIf=\"!details.tripClosed\">\n                    <a title=\"View Location Map\" class=\"icon\" (click)=\"endTrip(details)\">\n                      <i class=\"icon-ic_mapview\" aria-hidden=\"true\"></i> <span>End Trip</span>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n        <div *ngIf=\"!noData\">\n            <div class=\"grid-nodata text-center text-red-medium\">\n              <h6>No Data Found</h6>\n            </div>\n          </div>\n      </table>\n      <div class=\"row\">\n        <div style=\"margin:0px auto;\" *ngIf=\"noData\">\n          <pagination-controls id=\"tripdetailspage\" class=\"pagination\" (pageChange)=\"pageChanged($event)\"\n            maxSize=\"6\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\n          </pagination-controls>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/trackmanagement/tripdetails/tripdetails.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/trackmanagement/tripdetails/tripdetails.component.ts ***!
  \**********************************************************************/
/*! exports provided: TripdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripdetailsComponent", function() { return TripdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/directives/dateformatter */ "./src/app/common/directives/dateformatter.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _common_services_tripnamagement_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/tripnamagement.api */ "./src/app/common/services/tripnamagement.api.ts");
/* harmony import */ var _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/toaster.service */ "./src/app/common/services/toaster.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TripdetailsComponent = /** @class */ (function () {
    function TripdetailsComponent(tripdetailsApi, toasterService, router, ngbDateFRParserFormatter) {
        this.tripdetailsApi = tripdetailsApi;
        this.toasterService = toasterService;
        this.router = router;
        this.ngbDateFRParserFormatter = ngbDateFRParserFormatter;
        this.tripDetailsData = [];
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_3__["PageModel"]();
        this.showSearchClear = false;
        this.showFilters = false;
        this.noData = false;
        this.tripView = false;
        this.searchValue = '';
        this.tripType = 'TRIP';
    }
    TripdetailsComponent.prototype.ngOnInit = function () {
        this.getTripDetails(0, this.pageSize);
    };
    TripdetailsComponent.prototype.refreshPage = function () {
        this.searchValue = '';
        this.model = undefined;
        this.getTripDetails(0, this.pageSize);
    };
    TripdetailsComponent.prototype.btnShowFilters = function () {
        this.showFilters = !this.showFilters;
    };
    TripdetailsComponent.prototype.changeDate = function () {
        this.getTripDetails(0, this.pageSize);
    };
    TripdetailsComponent.prototype.clearSearch = function () {
        this.searchValue = '';
        this.showSearchClear = false;
        this.searchData();
    };
    TripdetailsComponent.prototype.searchData = function () {
        this.getTripDetails(0, this.pageSize);
        this.showSearchClear = (this.searchValue.length > 4) ? true : false;
    };
    TripdetailsComponent.prototype.pageChanged = function (event) {
        this.p = event - 1;
        this.getTripDetails(this.p, this.pageSize);
    };
    TripdetailsComponent.prototype.viewTrip = function (details) {
        this.router.navigate(['tripmanagement/tripcreate'], { queryParams: { tripId: details.tripId }, queryParamsHandling: 'merge' });
    };
    TripdetailsComponent.prototype.openclosedTrips = function () {
        this.tripView = !this.tripView;
        this.getTripDetails(0, this.pageSize);
    };
    TripdetailsComponent.prototype.changeTripType = function (triptype) {
        this.tripType = triptype;
        this.getTripDetails(0, this.pageSize);
    };
    TripdetailsComponent.prototype.endTrip = function (tripdetails) {
        var _this = this;
        console.log(tripdetails);
        var newobj = new Object({ imeiNumber: tripdetails.imeiNumber });
        this.tripdetailsApi.endTrip(JSON.stringify(newobj)).subscribe(function (_data) {
            _this.getTripDetails(0, _this.pageSize);
            _this.toasterService.showSuccess('bottom-right', 'Trip has been successfully closed ');
        }, function (_error) {
            _this.toasterService.showError('bottom-right', 'ERROR: Unable to close the Trip.');
        });
    };
    TripdetailsComponent.prototype.getTripDetails = function (page, size) {
        var _this = this;
        var formatDate = this.ngbDateFRParserFormatter.format(this.model);
        this.tripdetailsApi.getAllTripDetails(page, size, formatDate, this.searchValue, this.tripView, this.tripType)
            .subscribe(function (data) {
            _this.tripDetailsData = data.content;
            _this.noData = (_this.tripDetailsData.length > 0);
            _this.page = data.page;
            console.log(_this.tripDetailsData);
        });
    };
    TripdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tripdetails',
            template: __webpack_require__(/*! ./tripdetails.component.html */ "./src/app/trackmanagement/tripdetails/tripdetails.component.html"),
            styles: [__webpack_require__(/*! ./tripdetails.component.css */ "./src/app/trackmanagement/tripdetails/tripdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_tripnamagement_api__WEBPACK_IMPORTED_MODULE_4__["TripManagementServiceApi"],
            _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_2__["NgbDateFRParserFormatter"]])
    ], TripdetailsComponent);
    return TripdetailsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=trackmanagement-trackmanagement-module.js.map