import { Component } from '@angular/core';
import { PickupService } from '../../sellerMohsen/servicesM/pickup.service';
import { User } from 'Models/User';

@Component({
  selector: 'app-car-dashboard',
  templateUrl: './car-dashboard.component.html',
  styleUrls: ['./car-dashboard.component.scss']
})
export class CarDashboardComponent {
constructor(private pickupService:PickupService){}
ngOnInit(){
  this.getUser();
}
user!:User;
getUser(){
  this.pickupService.getUser().subscribe(data=>{this.user=data});
}
}
