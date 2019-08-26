import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmergencymonitoringComponent } from './emergencymonitoring.component';

const routes: Routes = [
    { path: '', component: EmergencymonitoringComponent, }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmergencymonitoringRoutingModule { }
