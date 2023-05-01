import { Component } from '@angular/core';
import { User } from 'Models/User';
import { PickupService } from '../../sellerMohsen/servicesM/pickup.service';
import { Request } from 'Models/Request';
import { RequestService } from '../../sellerMohsen/servicesM/request.service';

@Component({
  selector: 'app-dashboard-freelancer',
  templateUrl: './dashboard-freelancer.component.html',
  styleUrls: ['./dashboard-freelancer.component.scss']
})
export class DashboardFreelancerComponent {
  constructor(private pickupService:PickupService,private requestService:RequestService){}
  ngOnInit(){
    this.countPickupDeliveredForfreelancer();
    this.countPickupOnTheWayForfreelancer();
    this.GetUser();
    this.SumPricePickupDeliveredByFreelancerToday();
    this.countPickupRefundedForfreelancer();
    this.countPickupReturnedForfreelancer();
    this.countRequestApprovedFreelancer();
    this.countRequestRejectedFreelancer();
    this.countPickupAssignedForFreelancer();
    this.countPickupTakedForFreelancer();
    this.LastRequestAssignedToFreelancer();
  }
  crrf!:number;
  countRequestRejectedFreelancer(){
       this.pickupService.countRequestRejectedFreelancer().subscribe(data=>{this.crrf=data});
   }
   craf!:number;
   countRequestApprovedFreelancer(){
    this.pickupService.countRequestApprovedFreelancer().subscribe(data=>{this.craf=data});
   }
   sppf!:number;
   SumPricePickupDeliveredByFreelancerToday(){
    this.pickupService.SumPricePickupDeliveredByFreelancerToday().subscribe(data=>{this.sppf=data});
   }
   cpdf!:number;
   countPickupDeliveredForfreelancer(){
    this.pickupService.countPickupDeliveredForfreelancer().subscribe(data=>{this.cpdf=data;this.chartjs()});
   }
   cpof!:number;
   countPickupOnTheWayForfreelancer(){
    this.pickupService.countPickupOnTheWayForfreelancer().subscribe(data=>{this.cpof=data});
   }
   cpref!:number;
   countPickupRefundedForfreelancer(){
    this.pickupService.countPickupRefundedForfreelancer().subscribe(data=>{this.cpref=data});
   }
   cprf!:number;
   countPickupReturnedForfreelancer(){
    this.pickupService.countPickupReturnedForfreelancer().subscribe(data=>{this.cprf=data});
   }
   user!:User;
   GetUser(){
    this.pickupService.getUser().subscribe(data=>{console.log(this.user); this.user=data});
  }
  cpaff!:number;
  countPickupAssignedForFreelancer(){
    this.pickupService.countPickupAssignedForFreelancer().subscribe(data=>{this.cpaff=data;this.chartjs()});
   }
   cptff!:number;
   countPickupTakedForFreelancer(){
    this.pickupService.countPickupTakedForFreelancer().subscribe(data=>{this.cptff=data;this.chartjs()});
   }
 request!:Request[];
 LastRequestAssignedToFreelancer(){
  this.requestService.LastRequestAssignedToFreelancer().subscribe(data=>{this.request=data});
 }

 options: any;
   data: any;
 chartjs(){
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');
  this.data = {
      labels: ['Assigned', 'Taked', 'Delivered'],
      datasets: [
          {
              data: [this.cpaff, this.cptff, this.cpdf],
              backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
              hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
          }
      ]
  };
 }




}
