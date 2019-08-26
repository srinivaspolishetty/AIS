import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APIEndPoints } from '../constants/apiendpointconstants';


@Injectable({
    providedIn: 'root'
})
export class VehicleManagementServiceApi {

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization': 'my-auth-token'
        })
    };

    getAllVehicleDetails(page: Number, size: Number, searchDate: string, searchValue: string) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.vehicleDetails}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}`;
        return this.httpClient.get(url);
    }
    addeditvehicle(vehicleDetails) {
        const url = `${environment.apiBase}${environment.version}${APIEndPoints.createVehicle}`;
        return this.httpClient.post(url, vehicleDetails, this.httpOptions);
    }
    vehicleMap(vehicleMapDetails) {
        const url = `${environment.apiBase}${environment.version}${APIEndPoints.mapImeiVehicle}`;
        return this.httpClient.post(url, vehicleMapDetails, this.httpOptions);
    }
}
