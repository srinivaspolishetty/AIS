import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIEndPoints } from '../constants/apiendpointconstants';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RawDataServiceApi {

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization': 'my-auth-token'
        })
    };
    getrawdata(page: Number, size: Number, startDate: string, endDate: string, searchValue: string, cvptype: string, packetType: string) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.rawData}`;
        url += `?page=${page}&size=${size}&cvpType=${cvptype}&packetStatus=${packetType}`;
        url += `&startDate=${startDate}&endDate=${endDate}&imeiNumber=${searchValue}`;
        return this.httpClient.get(url);
    }
}
