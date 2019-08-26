(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mapview-mapview-module"],{

/***/ "./src/app/mapview/mapview-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/mapview/mapview-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MapviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapviewRoutingModule", function() { return MapviewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mapview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapview.component */ "./src/app/mapview/mapview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _mapview_component__WEBPACK_IMPORTED_MODULE_2__["MapviewComponent"], }
];
var MapviewRoutingModule = /** @class */ (function () {
    function MapviewRoutingModule() {
    }
    MapviewRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MapviewRoutingModule);
    return MapviewRoutingModule;
}());



/***/ }),

/***/ "./src/app/mapview/mapview.component.css":
/*!***********************************************!*\
  !*** ./src/app/mapview/mapview.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHZpZXcvbWFwdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mapview/mapview.component.html":
/*!************************************************!*\
  !*** ./src/app/mapview/mapview.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-t-1\">\n    <div class=\"col-md-10\">\n      <h4>Map View</h4>\n      <nav aria-label=\"breadcrumb\" class=\"d-none d-sm-block\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Map View</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n  <!-- <div class=\"row\">\n      <div class=\"col-9 col-sm-10 col-md-11 p-t-3\">\n      </div>\n      <div class=\"col-3 col-sm-2 col-md-1 text-right\">\n         <button type=\"button\" class=\"btn-search\" (click)=\"btnShowFilters()\"><i class=\"icon-ic_searchfilter\"></i></button>\n      </div>\n    </div>\n    <div class=\"row page-filters\" [ngClass]=\"{'show': showFilters == true}\">\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n          <div class=\"col-md-3 p-r-0\"></div>\n          <div class=\"col-md-3 p-r-0\"></div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n                <select class=\"form-control\" [(ngModel)]=\"imeiNumber\"  name=\"imeiNumber\" (change)=\"changeImei()\">\n                    <option value=\"\">Select IMEI Number</option>\n                <option *ngFor=\"let vehicle of liveVehicleArray\" value=\"{{vehicle.imeiNumber}}\">{{vehicle.imeiNumber}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <div class=\"input-group-append datepicker\">\n                <input type=\"text\" class=\"form-control\" readOnly placeholder=\"yyyy-mm-dd\" name=\"dp\"\n                  [(ngModel)]=\"model\" (dateSelect)=\"changeDate();\" ngbDatepicker #d=\"ngbDatepicker\">\n                <button style=\"outline:none\" class=\"btn-cal calendar\" (click)=\"d.toggle()\" type=\"button\"> <i class=\"fa fa-calendar\"\n                    aria-hidden=\"true\"></i></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div> -->\n  \n  \n  <div class=\"row\">\n    \n  \n    \n    \n      <div id=\"googleMap\" class=\"google_map_align p-l-3 p-r-3\"*ngIf=\"devicetrack == true\">\n          <agm-map [zoom]=\"9\" [latitude]=\"lat\" [longitude]=\"lng\">\n              <agm-direction [origin]=\"origin\" [destination]=\"destination\" [renderOptions]=\"renderOpts\"\n              [markerOptions]=\"markerOpts\" [waypoints]=\"waypoints\"></agm-direction>\n          </agm-map>\n        </div>\n\n\n\n\n        <div id=\"googleMap\" class=\"google_map_align p-l-3 p-r-3\" *ngIf=\"devicetrack == false\">\n            <agm-map [zoom]=\"20\" [latitude]=\"lat\" [longitude]=\"lng\" [disableDefaultUI]=\"false\" [zoomControl]=\"false\" (mapClick)=\"mapClicked($event)\" (mapReady)=\"mapReady($event)\">\n                <agm-marker *ngFor=\"let m of liveVehicleArray; let i = index\" (markerClick)=\"clickedMarker(m.rcNumber, i,infowindow, $event)\" [latitude]=\"m.latitude\"\n                [longitude]=\"m.langitude\" [label]=\"\" [markerDraggable]=\"false\" [iconUrl]=\"m.image\" (dragEnd)=\"markerDragEnd(m, $event)\">\n                <agm-info-window #infowindow>\n                    <div class=\"map-tool-tip\">\n                        <h6>Vehicle No: <span>{{m.vehicleRegNo}}</span></h6><br>\n                        <h6>IMEI No: <span>{{m.imeiNumber}}</span>, Updated Date: <span>{{m.updatedDate}}</span></h6><br>\n                        <h6>Location: <span>{{m.location}}</span></h6>\n                    </div>\n                </agm-info-window>\n              </agm-marker>\n            </agm-map>\n          </div>\n\n\n  </div>"

/***/ }),

/***/ "./src/app/mapview/mapview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/mapview/mapview.component.ts ***!
  \**********************************************/
/*! exports provided: MapviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapviewComponent", function() { return MapviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_services_devicemanagement_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/services/devicemanagement.api */ "./src/app/common/services/devicemanagement.api.ts");
/* harmony import */ var _common_services_dashboard_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/services/dashboard.api */ "./src/app/common/services/dashboard.api.ts");
/* harmony import */ var _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/directives/dateformatter */ "./src/app/common/directives/dateformatter.ts");
/* harmony import */ var _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/services/toaster.service */ "./src/app/common/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MapviewComponent = /** @class */ (function () {
    function MapviewComponent(calendar, devicemanagementApiService, deviceTrackingApi, ngbDateFRParserFormatter, toasterService) {
        this.calendar = calendar;
        this.devicemanagementApiService = devicemanagementApiService;
        this.deviceTrackingApi = deviceTrackingApi;
        this.ngbDateFRParserFormatter = ngbDateFRParserFormatter;
        this.toasterService = toasterService;
        this.showFilters = false;
        this.devicetrack = false;
        this.lat = 17.419545;
        this.lng = 78.401008;
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
    MapviewComponent.prototype.ngOnInit = function () {
        this.getLiveVehicles();
        this.origin = { lat: .0000, lng: .0000 };
        this.destination = { lat: .0000, lng: .0000 };
    };
    MapviewComponent.prototype.btnShowFilters = function () {
        this.showFilters = !this.showFilters;
    };
    MapviewComponent.prototype.changeDate = function () {
    };
    MapviewComponent.prototype.changeImei = function () {
        if (this.imeiNumber !== '') {
            this.getdeviceTrackData();
        }
        else {
            this.devicetrack = false;
        }
    };
    MapviewComponent.prototype.mapReady = function (map) {
        this.map = map;
    };
    MapviewComponent.prototype.clickedMarker = function (label, index, infowindow, $event) {
        this.lat = $event.latitude;
        this.lng = $event.longitude;
        this.map.setCenter({ lat: $event.latitude, lng: $event.longitude });
        var position = new google.maps.LatLng($event.latitude, $event.longitude);
        this.map.panTo(position);
        this.map.setZoom(22);
        if (this.previous) {
            this.previous.close();
        }
        this.previous = infowindow;
    };
    MapviewComponent.prototype.getLiveVehicles = function () {
        var _this = this;
        this.devicemanagementApiService.getliveDevices().subscribe(function (data) {
            _this.liveVehicleArray = data.content;
            console.log(_this.liveVehicleArray);
            _this.prepareDatatoDispaly();
        });
    };
    MapviewComponent.prototype.prepareDatatoDispaly = function () {
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
    MapviewComponent.prototype.getdeviceTrackData = function () {
        var _this = this;
        this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
        this.deviceTrackingApi.getTrackingDetails(this.imeiNumber, this.formatDate)
            .subscribe(function (data) {
            _this.devicetracking = data.content;
            console.log(_this.devicetracking);
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
                    }
                    _this.devicetrack = true;
                }
                else {
                    _this.devicetrack = false;
                    _this.toasterService.showError('bottom-right', 'ERROR: No Tracking Data available for this IMEI Number : ' + _this.imeiNumber);
                }
            }
            else {
                _this.devicetrack = false;
                _this.toasterService.showError('bottom-right', 'ERROR: No Tracking Data available for this IMEI Number : ' + _this.imeiNumber);
            }
        });
    };
    MapviewComponent.prototype.ngOnDestroy = function () {
        if (this.getVehicle) {
            clearInterval(this.getVehicle);
        }
    };
    MapviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mapview',
            template: __webpack_require__(/*! ./mapview.component.html */ "./src/app/mapview/mapview.component.html"),
            styles: [__webpack_require__(/*! ./mapview.component.css */ "./src/app/mapview/mapview.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], _common_services_devicemanagement_api__WEBPACK_IMPORTED_MODULE_3__["DeviceManagementServiceApi"],
            _common_services_dashboard_api__WEBPACK_IMPORTED_MODULE_4__["DashboardServiceApi"], _common_directives_dateformatter__WEBPACK_IMPORTED_MODULE_5__["NgbDateFRParserFormatter"],
            _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]])
    ], MapviewComponent);
    return MapviewComponent;
}());



/***/ }),

/***/ "./src/app/mapview/mapview.module.ts":
/*!*******************************************!*\
  !*** ./src/app/mapview/mapview.module.ts ***!
  \*******************************************/
/*! exports provided: MapviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapviewModule", function() { return MapviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _mapview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapview.component */ "./src/app/mapview/mapview.component.ts");
/* harmony import */ var _mapview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapview-routing.module */ "./src/app/mapview/mapview-routing.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm5/agm-direction.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MapviewModule = /** @class */ (function () {
    function MapviewModule() {
    }
    MapviewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_mapview_component__WEBPACK_IMPORTED_MODULE_4__["MapviewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _mapview_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapviewRoutingModule"],
                agm_direction__WEBPACK_IMPORTED_MODULE_7__["AgmDirectionModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"]
            ]
        })
    ], MapviewModule);
    return MapviewModule;
}());



/***/ })

}]);
//# sourceMappingURL=mapview-mapview-module.js.map