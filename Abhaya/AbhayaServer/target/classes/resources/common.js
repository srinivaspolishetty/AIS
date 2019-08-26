(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/common/services/commandmanagement.api.ts":
/*!**********************************************************!*\
  !*** ./src/app/common/services/commandmanagement.api.ts ***!
  \**********************************************************/
/*! exports provided: CommandManagementServiceApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandManagementServiceApi", function() { return CommandManagementServiceApi; });
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



var CommandManagementServiceApi = /** @class */ (function () {
    function CommandManagementServiceApi(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'my-auth-token'
            })
        };
    }
    CommandManagementServiceApi.prototype.sendActivationRequest = function (packetDetails) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/executeTask";
        return this.httpClient.post(url, packetDetails, this.httpOptions);
    };
    CommandManagementServiceApi.prototype.getCommandList = function (page, size, searchDate, searchValue) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/taskDetails";
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue;
        return this.httpClient.get(url);
    };
    CommandManagementServiceApi.prototype.getpayloadDetails = function (type) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/smsPacketTypes";
        url += "?commandType=" + type;
        return this.httpClient.get(url);
    };
    CommandManagementServiceApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommandManagementServiceApi);
    return CommandManagementServiceApi;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map