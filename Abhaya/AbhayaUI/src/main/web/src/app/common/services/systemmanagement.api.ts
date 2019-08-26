import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APIEndPoints } from '../constants/apiendpointconstants';


@Injectable({
    providedIn: 'root'
})
export class SystemManagementServiceApi {

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization': 'my-auth-token'
        })
    };
    getAllSystemProperties(page: Number, size: Number, searchDate: string, searchValue: string) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.systemProperties}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}`;
        return this.httpClient.get(url);
    }
    addeditsystemprop(SystemManagement) {
        const url = `${environment.apiBase}${environment.version}${APIEndPoints.systemProperties}`;
        return this.httpClient.post(url, SystemManagement, this.httpOptions);
    }
}
