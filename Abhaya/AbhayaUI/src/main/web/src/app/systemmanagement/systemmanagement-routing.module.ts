import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystempropertiesComponent } from './systemproperties.component';

const routes: Routes = [
  { path: '', component: SystempropertiesComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemmanagementRoutingModule { }
