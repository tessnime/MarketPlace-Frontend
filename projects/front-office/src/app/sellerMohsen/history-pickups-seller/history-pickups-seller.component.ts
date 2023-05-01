import { Component } from '@angular/core';
import { PickupService } from '../servicesM/pickup.service';
import { Pickup } from 'Models/Pickup';
import { MatDialog } from '@angular/material/dialog';
import { BuyerOfPickupComponent } from '../../agency/buyer-of-pickup/buyer-of-pickup.component';

@Component({
  selector: 'app-history-pickups-seller',
  templateUrl: './history-pickups-seller.component.html',
  styleUrls: ['./history-pickups-seller.component.scss']
})
export class HistoryPickupsSellerComponent {
constructor(private pickupService:PickupService,private dialog: MatDialog){}
ngOnInit(){
this.RetrieveAllPickupsOfSeller();
}
query: string = '';
  filteredItems: Pickup[] = [];

  search(event: Event) {
    this.query = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredItems = this.pickup.filter(item =>
      item.codePickup.toLowerCase().includes(this.query)
    );
  }
pickup!:Pickup[];
RetrieveAllPickupsOfSeller(){
  this.pickupService.RetrieveAllPickupsOfSeller().subscribe(data=>{this.pickup=data;this.filteredItems = data;});
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
}
}
