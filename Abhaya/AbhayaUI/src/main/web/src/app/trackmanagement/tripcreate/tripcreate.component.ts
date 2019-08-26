import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ToasterService } from '../../common/services/toaster.service';
import { Tripdetails } from '../../common/models/tripdetails.model';
import { TripManagementServiceApi } from '../../common/services/tripnamagement.api';

@Component({
    selector: 'app-tripcreate',
    templateUrl: './tripcreate.component.html',
    styleUrls: ['./tripcreate.component.css']
})
export class TripcreateComponent implements OnInit {

    public tripId: number;
    public tripDetailsData: Tripdetails;
    public pageTitle: string;
    public buttonText : string;
    public showFilters: Boolean = false;
    public showDetails: Boolean = false;
    public endTripBtn: Boolean = true;
    public isGeoFencing: Boolean = false;
    public url: SafeResourceUrl;
    public dataFromIframe;
    @HostListener('window:message', ['$event'])
    onMessage(event) {
        this.dataFromIframe = event.data.message;
        if (this.dataFromIframe !== undefined) {
            if (this.dataFromIframe === 'Success') {
                this.toasterService.showSuccess('bottom-right', 'Successfully created a Trip');
                this.router.navigate(['tripmanagement/tripdetails']);
            } else {
                this.toasterService.showError('bottom-right', 'ERROR: ' + this.dataFromIframe);
                this.ngOnInit();
            }
        }
    }


    constructor(private sanitizer: DomSanitizer, private router: Router,
        private toasterService: ToasterService, private activatedRoute: ActivatedRoute,
        private tripdetailsApi: TripManagementServiceApi) {
            this.pageTitle = 'Create Trip';
        }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.tripId = params['tripId'];
            let dynamicUrl = 'http://14.98.164.17:8099/index.html';
            // let dynamicUrl = 'http://www.srinivaspolishetty.com/if/index.html';
            dynamicUrl = (this.tripId !== undefined) ? `${dynamicUrl}?tripId=${this.tripId}` : dynamicUrl;
            this.url = this.sanitizer.bypassSecurityTrustResourceUrl(dynamicUrl);
            this.showDetails = (this.tripId !== undefined) ? true : false;
            this.pageTitle = (this.tripId !== undefined) ? 'View Trip' : 'Create Trip';
        });
        if (this.tripId !== undefined) {
            this.getTripDetails();
            this.pageTitle = 'View Trip';
            this.showDetails = true;
        }
    }
    btnShowFilters() {
        this.showFilters = !this.showFilters;
    }
    endTrip() {
        const newobj = new Object({ imeiNumber: this.tripDetailsData[0].imeiNumber });
        this.tripdetailsApi.endTrip(JSON.stringify(newobj)).subscribe((_data: any) => {
            this.toasterService.showSuccess('bottom-right', 'Trip has been successfully closed ');
            this.router.navigate(['tripmanagement/tripdetails']);
        }, (_error: any) => {
            this.toasterService.showError('bottom-right', 'ERROR: Unable to close the Trip.');
        }
        );
    }
    getTripDetails() {
        this.tripdetailsApi.getTripById(this.tripId)
            .subscribe((data: Tripdetails) => {
                this.tripDetailsData = data.content;
                this.endTripBtn = this.tripDetailsData[0].tripClosed;
                this.isGeoFencing = (this.tripDetailsData[0].identifier === 'GEOFENCING') ? true : false;
                this.buttonText = (this.tripDetailsData[0].identifier === 'GEOFENCING') ? 'Geofencing Disable' : 'End Trip';
                console.log(this.tripDetailsData);
            });
    }
}
