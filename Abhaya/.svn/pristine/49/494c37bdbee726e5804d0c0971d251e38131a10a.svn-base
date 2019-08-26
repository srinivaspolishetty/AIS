import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Vehicledetails } from '../../common/models/vehicle.model';
import { VehicleManagementServiceApi } from '../../common/services/vehiclemanagement.api';
import { ToasterService } from '../../common/services/toaster.service';
import { Validations } from '../../common/constants/validationconstants';

@Component({
    selector: 'app-vehiclemapping',
    templateUrl: './vehiclemapping.component.html',
    styleUrls: ['./vehiclemapping.component.css']
})
export class VehiclemappingComponent implements OnInit {
    @Input() VehicleMapDetails: Vehicledetails;
    public validations : any = Validations;
    constructor(private vehicleDetailsApi: VehicleManagementServiceApi, private toasterService: ToasterService,
         public activeModal: NgbActiveModal) { }

    ngOnInit() {
        console.log(this.VehicleMapDetails);
    }
    onSubmit() {
        this.activeModal.close();
    }
    saveVehicleMap() {
        const newobj = new Object({imeiNumber: this.VehicleMapDetails.imeiNumber,
            vehicleRegNumber: this.VehicleMapDetails.vehicleRegNumber});
        console.log(newobj);
        this.vehicleDetailsApi.vehicleMap(JSON.stringify(newobj)) .subscribe((_data: any) => {
            console.log(_data);
            (_data.code == 200)?this.toasterService.showSuccess('bottom-right', _data.message) :
            this.toasterService.showError('bottom-right', 'ERROR: Unable to Mapped Vehicle.' + _data.message);
                this.activeModal.close('refreshContent');
            }, (_error: any) => {
                this.activeModal.close();
                this.activeModal.close('Close click');
                this.toasterService.showError('bottom-right', 'ERROR: Unable to Mapped Vehicle with IMEI Number.');
            }
        );
    }
}
