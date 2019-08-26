import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UserManagementServiceApi } from '../common/services/usermanagement.api';
import { User } from '../common/models/user.model';
import { PageModel } from '../common/models/page.model';
import { NgbDateFRParserFormatter } from '../common/directives/dateformatter';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { environment } from '../../environments/environment';
import { Validations } from '../common/constants/validationconstants';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    public pageSize: Number = environment.pageSize;
    public showFilters: Boolean = false;
    public page: PageModel = new PageModel();
    public p: Number;
    model: NgbDateStruct;
    pageTitle: string;
    public showSearchClear = false;
    public searchValue: string;
    public isDataExists: Boolean = false;
    userdata: Array<User> = [];
    public validations : any = Validations;

    constructor(private usersApiService: UserManagementServiceApi, private modalService: NgbModal,
         private ngbDateFRParserFormatter: NgbDateFRParserFormatter) {
             this.searchValue = '';
             this.pageTitle = 'User Details';
    }

    ngOnInit() {
        this.getUserDetails(0, this.pageSize);
    }
    changeDate() {
        this.getUserDetails(0, this.pageSize);
    }
    searchData() {
        this.getUserDetails(0, this.pageSize);
        this.showSearchClear = (this.searchValue.length > 4) ? true : false;
    }
    clearSearch() {
        this.searchValue = '';
        this.showSearchClear = false;
        this.searchData();
    }
    btnShowFilters() {
        this.showFilters = !this.showFilters;
    }

    userDetails(userdetails) {
        const modalRef = this.modalService.open(UserdetailsComponent, {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.user = userdetails;
    }


    pageChanged(event) {
        this.p = event - 1;
        this.getUserDetails(this.p, this.pageSize);
    }
    getUserDetails(page: Number, size: Number) {
        const formatDate = this.ngbDateFRParserFormatter.format(this.model);
        this.usersApiService.getAllUsers(page, size, formatDate, this.searchValue)
            .subscribe((data: User) => {
                this.userdata = data.content;
                this.isDataExists = (this.userdata.length > 0);
                this.page = data.page;
        });
    }

}
