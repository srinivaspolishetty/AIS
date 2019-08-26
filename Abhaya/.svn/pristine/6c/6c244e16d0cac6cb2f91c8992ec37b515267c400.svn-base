import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Validations } from '../../common/constants/validationconstants';
import { Deviceactivation } from '../../common/models/deviceactivation.model';
import { newDevice } from "../../common/models/newdevice.model";
import { ToasterService } from '../../common/services/toaster.service';
import { DeviceManagementServiceApi } from "../../common/services/devicemanagement.api";

@Component({
    selector: 'app-deviceactivation',
    templateUrl: './deviceactivation.component.html',
    styleUrls: ['./deviceactivation.component.css']
})
export class DeviceactivationComponent implements OnInit {
    showFilters = false;
    public viewdata: Boolean = false;
    public deviceActivedata: Deviceactivation;
    public Validations: Object = Validations;
    public newDeviceDetails : newDevice;
    constructor(public activeModal: NgbActiveModal,  private toasterService: ToasterService, private deviceManagementApi:DeviceManagementServiceApi) {
    }

    ngOnInit() {
        this.deviceActivedata = new Deviceactivation();
    }
    onSubmit() {
        this.activeModal.close();
    }
    saveDevice(devicedetails){
        console.log(devicedetails);
        this.deviceManagementApi.addNewDevices(JSON.stringify(devicedetails))
            .subscribe((_data: any) => {
                (_data.code === 200) ? this.toasterService.showSuccess('bottom-right','Successfully Added New Device.') : this.toasterService.showError('bottom-right', _data.message);
                this.activeModal.close('refreshContent');
            }, (_error: any) => {
              console.log(_error);
            }
            );
    }
    btnShowFilters() {
        this.showFilters = !this.showFilters;
    }
}
