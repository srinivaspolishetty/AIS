import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APIEndPoints } from '../constants/apiendpointconstants';


@Injectable({
  providedIn: 'root'
})
export class DashboardServiceApi {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Authorization': 'my-auth-token'
    })
  };
  getAllDetails(requestActions) {
    let url = `${environment.apiBase}${environment.version}${APIEndPoints.dcSummary}`;
    url += `?action=${requestActions}`;
    return this.httpClient.get(url);
  }

  getDeviceHealthDetails() {
    const url = `${environment.apiBase}${environment.version}${APIEndPoints.dcVehmodeSummary}`;
    return this.httpClient.get(url);
  }

  getTrackingDetails(imeiNumber, selectedDate) {
    let url = `${environment.apiBase}${environment.version}${APIEndPoints.dcHistory}`;
    url += `?networkDate=${selectedDate}&imeiNumber=${imeiNumber}`;
    // let url = `https://abhayaotsi.epragathi.org:8099/v1/tripTrackingDetails?tripId=41`;
    return this.httpClient.get(url);
  }
}
