import { Component } from '@angular/core';
import { PickupService } from 'projects/front-office/src/app/sellerMohsen/servicesM/pickup.service';

@Component({
  selector: 'app-pickup-dashboard',
  templateUrl: './pickup-dashboard.component.html',
  styleUrls: ['./pickup-dashboard.component.scss']
})
export class PickupDashboardComponent {
constructor(private pickupService:PickupService){}
ngOnInit(){
  this.countOfPickupDeliveredweekAdministrator();
  this.countPickupDeliveredTodayAdministrator();
  this.SumOfPricePickupDeliveredToday();
  this.countAllAgencyAdmin();
}
cpd!:number;
countPickupDeliveredTodayAdministrator(){
this.pickupService.countPickupDeliveredTodayAdministrator().subscribe(data=>{this.cpd=data});
}
cpd1!:number;
countOfPickupDeliveredweekAdministrator(){
this.pickupService.countOfPickupDeliveredweekAdministrator().subscribe(data=>{this.cpd1=data});
}
cpd2!:number;
SumOfPricePickupDeliveredToday(){
this.pickupService.SumOfPricePickupDeliveredToday().subscribe(data=>{this.cpd2=data});
}
cpd3!:any;
countAllAgencyAdmin(){
  return this.pickupService.countAllAgencyAdmin().subscribe(data=>{this.cpd3=data});
}
}
