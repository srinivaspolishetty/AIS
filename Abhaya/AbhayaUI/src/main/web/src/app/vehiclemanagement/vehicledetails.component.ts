import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { PageModel } from '../common/models/page.model';
import { NgbDateFRParserFormatter } from '../common/directives/dateformatter';
import { VehicleManagementServiceApi } from '../common/services/vehiclemanagement.api';
import { Vehicledetails } from '../common/models/vehicle.model';
import { AddeditvehicleComponent } from './addeditvehicle/addeditvehicle.component';
import { VehiclemappingComponent } from './vehiclemapping/vehiclemapping.component';
import { environment } from '../../environments/environment';
import { Validations } from '../common/constants/validationconstants';

@Component({
    selector: 'app-vehicledetails',
    templateUrl: './vehicledetails.component.html',
    styleUrls: ['./vehicledetails.component.css']
})
export class VehicledetailsComponent implements OnInit {


    vehicleDetailsData: Array<Vehicledetails> = [];
    public pageSize: Number = environment.pageSize;
    public intilPageNumber: Number = 0;
    public showFilters: Boolean = false;
    public searchValue: string;
    public pageSizeValues = [];
    model: NgbDateStruct;
    public showSearchClear = false;
    public isDataExists: Boolean = false;
    public page: PageModel = new PageModel();
    public p: Number;
    public validations : any = Validations;

    constructor(private ngbDateFRParserFormatter: NgbDateFRParserFormatter, private vehicleDetailsApi: VehicleManagementServiceApi,
        private modalService: NgbModal) {
        this.searchValue = '';
        this.pageSizeValues = [10, 50, 100, 200];
    }

    ngOnInit() {
        this.getVehicleDetails(this.intilPageNumber, this.pageSize);
    }
    btnShowFilters() {
        this.showFilters = !this.showFilters;
    }
    viewVehicleMap(details) {
        const modalRef = this.modalService.open(VehiclemappingComponent, {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.VehicleMapDetails = details;
        modalRef.result.then((result) => {
            if (result === 'refreshContent') {
                this.getVehicleDetails(this.intilPageNumber, this.pageSize);
                this.p = 1;
            }
        }).catch((_error: any) => {
        });
    }
    refreshPage() {
        this.searchValue = '';
        this.model = undefined;
        this.getVehicleDetails(this.intilPageNumber, this.pageSize);
        this.p = 1;
    }
    changeDate() {
        this.getVehicleDetails(this.intilPageNumber, this.pageSize);
    }
    searchData() {
        this.showSearchClear = (this.searchValue.length > 4);
        this.getVehicleDetails(this.intilPageNumber, this.pageSize);
    }

    clearSearch() {
        this.searchValue = '';
        this.searchData();
    }
    changePageSize() {
        this.getVehicleDetails(this.intilPageNumber, this.pageSize);
    }
    pageChanged(event) {
        this.p = event;
        this.getVehicleDetails(event - 1, this.pageSize);
    }
    addVehicleDetails(details, action) {
        if (action !== undefined && action !== '') {
            details.action = action;
        }
        const modalRef = this.modalService.open(AddeditvehicleComponent, {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectVehicleDetails = details;
        modalRef.result.then((result) => {
            if (result === 'refreshContent') {
                this.getVehicleDetails(this.intilPageNumber, this.pageSize);
                this.p = 1;
            }
        }).catch((_error: any) => {
        });
    }

    getVehicleDetails(page, size) {
        const formatDate = this.ngbDateFRParserFormatter.format(this.model);
        this.vehicleDetailsApi.getAllVehicleDetails(page, size, formatDate, this.searchValue)
            .subscribe((data: Vehicledetails) => {
                this.vehicleDetailsData = data.content;
                this.isDataExists = (this.vehicleDetailsData.length > 0);
                this.page = data.page;
            });
    }
}
