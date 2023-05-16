import { Component } from '@angular/core';
import { PickupService } from '../../sellerMohsen/servicesM/pickup.service';
import { Pickup } from 'Models/Pickup';
import { Table } from 'primeng/table';
import { DataView } from 'primeng/dataview';
import { MatDialog } from '@angular/material/dialog';
import { BuyerOfPickupComponent } from '../buyer-of-pickup/buyer-of-pickup.component';


@Component({
  selector: 'app-history-pickups',
  templateUrl: './history-pickups.component.html',
  styleUrls: ['./history-pickups.component.scss']
})
export class HistoryPickupsComponent {
constructor(private pickupService:PickupService,private dialog: MatDialog){}
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

  buyerGet(pickup:Pickup){
    const dialogRef = this.dialog.open(BuyerOfPickupComponent, {
      data: { pickup },
      width      : '100%',
      maxWidth   : '400px',
      height     : 'auto',
      hasBackdrop: true,
      maxHeight  : '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
