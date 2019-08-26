import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmergencymonitoringComponent } from './emergencymonitoring.component';
import { EmergencymonitoringRoutingModule } from './emergencymonitoring-routing.module';

@NgModule({
    declarations: [EmergencymonitoringComponent],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NgxPaginationModule,
        EmergencymonitoringRoutingModule
    ]
})
export class EmergencymonitoringModule { }
