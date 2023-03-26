import { Component } from '@angular/core';
import { Store } from 'Models/Store';
import { User } from 'Models/User';
import { PickupService } from '../servicesM/pickup.service';

@Component({
  selector: 'app-list-of-store',
  templateUrl: './list-of-store.component.html',
  styleUrls: ['./list-of-store.component.scss']
})
export class ListOfStoreComponent {
constructor(private pickupService:PickupService){}
store!:Store[];
user!:User;
nbOrder!:number;
ngOnInit(){
this.GetStoreList();
this.GetUser();
}
GetStoreList(){
  this.pickupService.getStoreByUser().subscribe(data=>{this.store=data;for(let s of this.store){this.CountOrderByStoreNoPickup(s.id)  }
  console.log(this.nbOrder);
},
(error) => {
  console.log(error);
}
);
}
GetUser(){
  this.pickupService.getUser().subscribe(data=>{this.user=data});
}
CountOrderByStoreNoPickup(idStore:number){
  this.pickupService.countOrderByStoreNoPickup(idStore).subscribe(data=>{this.nbOrder=data});
}
}
