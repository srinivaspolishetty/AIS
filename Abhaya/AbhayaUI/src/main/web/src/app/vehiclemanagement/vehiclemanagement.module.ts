import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VehicledetailsComponent } from './vehicledetails.component';
import { VehiclemanagementRoutingModule } from './vehiclemanagement-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [VehicledetailsComponent],
    imports: [
        CommonModule,
        NgbModule,
        FormsModule,
        VehiclemanagementRoutingModule,
        NgxPaginationModule,
    ],
})
export class VehiclemanagementModule { }
