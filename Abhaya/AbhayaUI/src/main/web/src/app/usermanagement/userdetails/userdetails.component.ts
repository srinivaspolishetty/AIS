import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../common/models/user.model';

@Component({
    selector: 'app-userdetails',
    templateUrl: './userdetails.component.html',
    styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

    @Input() user: User;
    constructor(public activeModal: NgbActiveModal) {

    }

    ngOnInit() {
        console.log(this.user);
    }

}
