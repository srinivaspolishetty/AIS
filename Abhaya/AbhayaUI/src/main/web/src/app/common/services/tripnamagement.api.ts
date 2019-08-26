import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APIEndPoints } from '../constants/apiendpointconstants';


@Injectable({
    providedIn: 'root'
})
export class TripManagementServiceApi {

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization': 'my-auth-token'
        })
    };

    getAllTripDetails(page: number, size: number, searchDate: string, searchValue: string, tripClosed: Boolean, isGeoFencing: string) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.tripDetails}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&imeiNumber=${searchValue}`;
        url += `&isTripClosed=${tripClosed}&identifier=${isGeoFencing}`;
        return this.httpClient.get(url);
    }
    getTripById(tripId: number) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.tripDetails}`;
        url += `?tripId=${tripId}`;
        return this.httpClient.get(url);
    }
    endTrip(tripDetails) {
        const url = `${environment.apiBase}${environment.version}${APIEndPoints.endTrip}`;
        return this.httpClient.post(url, tripDetails, this.httpOptions);
    }
}
