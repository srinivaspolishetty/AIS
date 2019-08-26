import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RouteDeviationServiceApi {

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization': 'my-auth-token'
        })
    };
    getrouteDetails(page: Number, size: Number, searchDate: string, searchValue: string) {
        let url = `${environment.apiBase}${environment.version}/routeDeviation`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}`;
        return this.httpClient.get(url);
    }
}
