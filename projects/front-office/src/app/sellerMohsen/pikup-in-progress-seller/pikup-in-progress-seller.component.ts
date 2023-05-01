import { Component } from '@angular/core';
import { PickupService } from '../servicesM/pickup.service';
import { Pickup } from 'Models/Pickup';
import { User } from 'Models/User';
import { MatDialog } from '@angular/material/dialog';
import { ViewDeliveryMenOfPickupComponent } from '../view-delivery-men-of-pickup/view-delivery-men-of-pickup.component';

@Component({
  selector: 'app-pikup-in-progress-seller',
  templateUrl: './pikup-in-progress-seller.component.html',
  styleUrls: ['./pikup-in-progress-seller.component.scss']
})
export class PikupInProgressSellerComponent {
constructor(private pickupService:PickupService,private dialog: MatDialog){}
ngOnInit(){
  this.RetrievePickupInProgress();
}
pickup!:Pickup[];
RetrievePickupInProgress(){
  this.pickupService.RetrievePickupInProgress().subscribe(data=>{this.pickup=data});
}
user!:User;
retrieveTheFreelancerOfPickup(idPickup:number){
this.pickupService.retrieveTheFreelancerOfPickup(idPickup).subscribe(data=>{this.user=data;
  const dialogRef = this.dialog.open(ViewDeliveryMenOfPickupComponent, {
    data: { data },
    width      : '100%',
    maxWidth   : '400px',
    height     : 'auto',
    hasBackdrop: true,
    maxHeight  : '700px',
  });
});
}
}
