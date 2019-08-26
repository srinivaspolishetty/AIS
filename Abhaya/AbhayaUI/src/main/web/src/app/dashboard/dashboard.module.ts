import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        NgxChartsModule,
        DashboardRoutingModule
    ]
})
export class DashboardModule { }
