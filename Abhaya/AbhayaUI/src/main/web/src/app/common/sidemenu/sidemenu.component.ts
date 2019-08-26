import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
    public sideMenu: Boolean = false;
    @Output() expandDiv = new EventEmitter();
    showmenu: Boolean = true;
    activelink: string;
    constructor() { }

    ngOnInit() {
    }
    showhide(event) {
        this.showmenu = !this.showmenu;
        this.sideMenu = !this.sideMenu;
        this.expandDiv.emit(this.showmenu);
        const elements = document.getElementsByClassName('collapse menu-sub show');
        if (elements.length > 0) {
            elements[0].classList.remove('show');
        }
    }

    houtmenu(event) {
        if (this.sideMenu) {
            this.showmenu = false;
            // this.expandDiv.emit(this.showmenu);
            const elements = document.getElementsByClassName('collapse menu-sub show');
            if (elements.length > 0) {
                // elements[0].classList.remove('show');
            }
        }
    }
    hovermenu(event) {
        this.showmenu = true;
        this.expandDiv.emit(this.showmenu);
        const elements = document.getElementsByClassName('collapse menu-sub show');
        if (elements.length > 0) {
            elements[0].classList.remove('show');
        }
    }
    hidesubmenu(event) {
        if (event !== undefined && event !== '') {
            const target = event.currentTarget;
            const pElement = target.parentElement.parentElement;
            const pclassAttr = pElement.attributes.id;
            this.activelink = pclassAttr.value;
        } else {
            this.activelink = '';
            const elements = document.getElementsByClassName('collapse menu-sub show');
            if (elements.length > 0) {
                elements[0].classList.remove('show');
            }
            return false;
        }
        if (!this.showmenu) {
            const target = event.currentTarget;
            target.parentElement.parentElement.classList.remove('show');
        }

    }
}
