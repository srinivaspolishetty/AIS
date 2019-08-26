import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from '../../common/directives/dateformatter';
import { PageModel } from '../../common/models/page.model';
import { TripManagementServiceApi } from '../../common/services/tripnamagement.api';
import { Tripdetails } from '../../common/models/tripdetails.model';
import { ToasterService } from '../../common/services/toaster.service';
import { environment } from '../../../environments/environment';
import { Validations } from '../../common/constants/validationconstants';

@Component({
    selector: 'app-tripdetails',
    templateUrl: './tripdetails.component.html',
    styleUrls: ['./tripdetails.component.css']
})
export class TripdetailsComponent implements OnInit {

    public tripDetailsData: Array<Tripdetails> = [];
    public pageSize: Number = environment.pageSize;
    public intilPageNumber: Number = 0;
    public page: PageModel = new PageModel();
    public model: NgbDateStruct;
    public p: Number;
    public showSearchClear = false;
    public showFilters: Boolean = false;
    public isDataExists: Boolean = false;
    public searchValue: string;
    public pageSizeValues = [];
    private tripView: Boolean = false;
    public tripType: string;
    public validations : any = Validations;


    constructor(private tripdetailsApi: TripManagementServiceApi,
        private toasterService: ToasterService, private router: Router,
        private ngbDateFRParserFormatter: NgbDateFRParserFormatter) {
            this.searchValue = '';
            this.tripType = 'TRIP';
            this.pageSizeValues = [10, 50, 100, 200];
    }

    ngOnInit() {
        this.getTripDetails(this.intilPageNumber, this.pageSize);
    }
    refreshPage() {
        this.searchValue = '';
        this.model = undefined;
        this.getTripDetails(this.intilPageNumber, this.pageSize);
    }
    btnShowFilters() {
        this.showFilters = !this.showFilters;
    }

    changeDate() {
        this.getTripDetails(this.intilPageNumber, this.pageSize);
        this.p = 1;
    }
    clearSearch() {
        this.searchValue = '';
        this.searchData();
    }
    searchData() {
        this.showSearchClear = (this.searchValue.length > 4);
        this.getTripDetails(this.intilPageNumber, this.pageSize);
    }
    pageChanged(event) {
        this.p = event;
        this.getTripDetails(event - 1, this.pageSize);
    }
    changePageSize() {
        this.getTripDetails(this.intilPageNumber, this.pageSize);
      }
    viewTrip(details) {
        this.router.navigate(['tripmanagement/tripcreate'], { queryParams: { tripId: details.tripId }, queryParamsHandling: 'merge'});
    }
    openclosedTrips() {
        this.tripView = !this.tripView;
        this.getTripDetails(this.intilPageNumber, this.pageSize);
    }

    changeTripType(triptype) {
        this.tripType = triptype;
        this.getTripDetails(this.intilPageNumber, this.pageSize);
    }

    endTrip(tripdetails) {
        console.log(tripdetails);
        const newobj = new Object({ imeiNumber: tripdetails.imeiNumber });
        this.tripdetailsApi.endTrip(JSON.stringify(newobj)) .subscribe((_data: any) => {
                this.getTripDetails(this.intilPageNumber, this.pageSize);
                this.toasterService.showSuccess('bottom-right', 'Trip has been successfully closed ');
            }, (_error: any) => {
                this.toasterService.showError('bottom-right', 'ERROR: Unable to close the Trip.');
            }
            );
    }
    getTripDetails(page, size) {
        const formatDate = this.ngbDateFRParserFormatter.format(this.model);
        this.tripdetailsApi.getAllTripDetails(page, size, formatDate, this.searchValue, this.tripView, this.tripType)
            .subscribe((data: Tripdetails) => {
                this.tripDetailsData = data.content;
                this.isDataExists = (this.tripDetailsData.length > 0);
                this.page = data.page;
                console.log(this.tripDetailsData);
        });
    }

}
