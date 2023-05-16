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

                    { label: 'Suppliers Requests', icon: 'pi pi-fw pi-check-square', routerLink: ['/store/suppRequests'] }

                ]
            },
            {
              label: 'Delivery Management',
              items: [
                  { label: 'Dashboard', icon: 'pi pi-fw pi-id-card', routerLink: ['/store/DashboardDelivery'] },
                  { label: 'add Pickup', icon: 'pi pi-fw pi-check-square', routerLink: ['/store/storess'] },
                  { label: 'Pickups Waiting', icon: 'pi pi-fw pi-bookmark', routerLink: ['/store/pickups'] },
                  { label: 'Pickups In Progress', icon: 'pi pi-fw pi-check-square', routerLink: ['/store/pickupsInProgress'] },
              ]
          },
          {
            label: 'Ads Library',
            items: [
                { label: 'Add Ads', icon: 'pi pi-fw pi-id-card', routerLink: ['/store/addAds'] },
                { label: 'My Ads', icon: 'pi pi-fw pi-id-card', routerLink: ['/store/myAds'] }

            ]
        },
        {
          label: 'History delivery Management',
          items: [
              { label: 'All Pickups', icon: 'pi pi-fw pi-id-card', routerLink: ['/store/HistoryPickups'] },
              { label: 'Statistical', icon: 'pi pi-fw pi-id-card', routerLink: ['/c/DashboardDelivery'] }

          ]
      },
        ];
    }
}
