import { Component } from '@angular/core';
import { PickupService } from '../../sellerMohsen/servicesM/pickup.service';
import { Pickup } from 'Models/Pickup';
import { Table } from 'primeng/table';
import { DataView } from 'primeng/dataview';


@Component({
  selector: 'app-history-pickups',
  templateUrl: './history-pickups.component.html',
  styleUrls: ['./history-pickups.component.scss']
})
export class HistoryPickupsComponent {
constructor(private pickupService:PickupService){}
ngOnInit(){
  this.RetrieveAllPickupsOfUser();
}
pickup!: Pickup[];


statuses!: any[];

loading: boolean = true;
activityValues: number[] = [0, 100];
cols: any[] = [];
RetrieveAllPickupsOfUser(){
  this.pickupService.RetrieveAllPickupsOfUser().subscribe(data=>{this.pickup=data;this.filteredItems = data;});
}
onGlobalFilter(table: Table, event: Event) {
  table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}

/*filteredItems!: any[];
query!:any;
search(query: string) {
  this.filteredItems = this.pickup.filter(item =>
    item.codePickup.toLowerCase().includes(query.toLowerCase())
  );
}
*/
query: string = '';
  filteredItems: Pickup[] = [];

  search(event: Event) {
    this.query = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredItems = this.pickup.filter(item =>
      item.codePickup.toLowerCase().includes(this.query)
    );
  }
}
