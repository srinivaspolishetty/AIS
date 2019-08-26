import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RawdataComponent } from './rawdata.component';

const routes: Routes = [
    { path: '', component: RawdataComponent, }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RawdataRoutingModule { }
