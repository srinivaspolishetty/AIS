import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmergencynMonitoring } from '../../common/models/emergencymonitoring.model';

@Component({
    selector: 'app-emergencydetails',
    templateUrl: './emergencydetails.component.html',
    styleUrls: ['./emergencydetails.component.css']
})
export class EmergencydetailsComponent implements OnInit {

    @Input() selectedEmergencydata: EmergencynMonitoring;

    constructor(public activeModal: NgbActiveModal) { }

    ngOnInit() {
    }

}
