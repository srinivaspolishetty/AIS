import { Component, OnInit } from '@angular/core';
import { NgbDateFRParserFormatter } from '../../common/directives/dateformatter';
import { PageModel } from '../../common/models/page.model';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { RouteDeviation } from '../../common/models/routedeviation.model';
import { RouteDeviationServiceApi } from '../../common/services/routedeviation.api';
import { environment } from '../../../environments/environment';
import { Validations } from '../../common/constants/validationconstants';

@Component({
    selector: 'app-routedeviation',
    templateUrl: './routedeviation.component.html',
    styleUrls: ['./routedeviation.component.css']
})
export class RoutedeviationComponent implements OnInit {

    routeDevDetails: Array<RouteDeviation> = [];
    public pageSize: Number = environment.pageSize;
    public intilPageNumber: Number = 0;
    public page: PageModel = new PageModel();
    public model: NgbDateStruct;
    public p: Number;
    public searchValue: string;
    public showSearchClear: Boolean = false;
    public formatDate: string;
    public pageSizeValues: Array<Number> = [];
    public pageSizeCount: Number;
    public showFilters: Boolean = false;
    public isDataExists: Boolean = false;
    public validations : any = Validations;

    constructor(private RouteDeviationApi: RouteDeviationServiceApi, private ngbDateFRParserFormatter: NgbDateFRParserFormatter) {
        this.pageSizeValues = [10, 50, 100, 200];
        this.searchValue = '';
    }

    ngOnInit() {
        this.getAllRouteDetails(this.intilPageNumber, this.pageSize);
    }
    refreshPage() {
        this.searchValue = '';
        this.model = undefined;
        this.getAllRouteDetails(this.intilPageNumber, this.pageSize);
    }
    btnShowFilters() {
        this.showFilters = !this.showFilters;
    }
    changeDate() {
        this.getAllRouteDetails(this.intilPageNumber, this.pageSize);
    }
    searchData() {
        this.showSearchClear = (this.searchValue.length > 4);
        this.p = 1;
        this.getAllRouteDetails(this.intilPageNumber, this.pageSize);
    }
    clearSearch() {
        this.searchValue = '';
        this.searchData();
    }
    changePageSize() {
        this.getAllRouteDetails(this.intilPageNumber, this.pageSize);
    }
    pageChanged(event) {
        this.p = event;
        this.getAllRouteDetails(event - 1, this.pageSize);
      }
    getAllRouteDetails(page: Number, size: Number) {
        this.formatDate = this.ngbDateFRParserFormatter.format(this.model);
        this.RouteDeviationApi.getrouteDetails(page, size, this.formatDate, this.searchValue)
            .subscribe((data: RouteDeviation) => {
                this.routeDevDetails = data.content;
                this.isDataExists = (this.routeDevDetails.length > 0);
                this.page = data.page;
                console.log(this.routeDevDetails);

            });
    }
}
