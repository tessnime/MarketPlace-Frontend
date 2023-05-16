import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/store'] }
                ]
            },
            {
                label: 'UI Components',
                items: [
                    { label: 'Stores', icon: 'pi pi-fw pi-circle', routerLink: ['/store/stores'] },

                    { label: 'Products', icon: 'pi pi-fw pi-id-card', routerLink: ['/store/list'] },
                    { label: 'Suppliers Requests', icon: 'pi pi-fw pi-check-square', routerLink: ['/store/suppRequests'] },
          
                ]
            }
        ];
    }
}
