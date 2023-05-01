import { Component } from '@angular/core';
import { PickupService } from '../../sellerMohsen/servicesM/pickup.service';
import { Pickup } from 'Models/Pickup';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-trak-order-by-freelancer',
  templateUrl: './trak-order-by-freelancer.component.html',
  styleUrls: ['./trak-order-by-freelancer.component.scss']
})
export class TrakOrderByFreelancerComponent {
constructor(private pickupService:PickupService,private r:ActivatedRoute,private route:Router,private snackBar: MatSnackBar){
}
ngOnInit(){
  this.idPickup=this.r.snapshot.params["idPickup"];
  this.RetrievePickupById(this.idPickup);
}
idPickup!:number;
pickup!:Pickup;
status!:String;
addForm(tt:NgForm){
  this.status=tt.controls["typeOfGearr"].value;
  this.pickupService.ModifyStatusOfPickupByDelivery(this.status,this.idPickup).subscribe(()=>{this.route.navigateByUrl('/freelancer/myPickups');
  this.snackBar.open('The status changed with success!', 'Close', {
    duration: 3000,
    verticalPosition: 'top',
    horizontalPosition: 'end',
    panelClass : ['green-snackbar'],
  });

});
}


ModifyStatusOfPickupByDelivery(status:String,idPickup:number){
this.pickupService.ModifyStatusOfPickupByDelivery(status,idPickup).subscribe();
}
RetrievePickupById(idPickup:number){
  this.pickupService.RetrievePickupById(idPickup).subscribe(data=>{this.pickup=data});
}
statusPickup= [
  'TAKED','ONTHEWAY','DELIVERED','RETURN','REFUNDED'
];
}
