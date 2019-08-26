import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-core',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

    showmenu = true;
    constructor() { }

    ngOnInit() {
    }
    expandRightDiv(value) {
        this.showmenu = value;
    }
}
