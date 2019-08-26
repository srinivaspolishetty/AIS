import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APIEndPoints } from '../constants/apiendpointconstants';


@Injectable({
    providedIn: 'root'
})
export class EmergencyMonitoringServiceApi {

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization': 'my-auth-token'
        })
    };
    getemergencyMonitoringDetails(page: Number, size: Number, startDate: string, endDate: string, searchValue: string) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.ebpPacketData}`;
        url += `?page=${page}&size=${size}&searchValue=${searchValue}&startDate=${startDate}&endDate=${endDate}`;
        return this.httpClient.get(url);
    }
}
