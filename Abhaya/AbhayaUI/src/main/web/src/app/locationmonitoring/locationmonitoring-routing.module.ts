import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationmonitoringComponent } from './locationmonitoring.component';

const routes: Routes = [
    { path: '', component: LocationmonitoringComponent, }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LocationmonitoringRoutingModule { }
