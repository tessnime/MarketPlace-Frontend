import { Component } from '@angular/core';
import { Store } from 'Models/Store';
import { PickupService } from '../servicesM/pickup.service';
import { DataView } from 'primeng/dataview';
import { SelectItem } from 'primeng/api';
import { User } from 'Models/User';
import { Request } from 'Models/Request';
import { RequestService } from '../servicesM/request.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss','../../../assets/vendors/styles/core.css']
})
export class StoreListComponent {
  constructor(private pickupService:PickupService,private requestService:RequestService,private snackBar:MatSnackBar,private route:Router){}
  store!:Store[];
  user!:User;
  i=0;
  a:any;
ngOnInit(){
  this.GetUser()
  this.CountPickupDeliverted();
  this.CountPickupOnTheWay();
  this.CountPickupPending();
  this.CountPickupRefunbded();
  this.CountPickupReturned();
  this.CountPickupAssigned();
  this.CountPickupTakedSeller();
  this.LastRequestCreatedForSeller();


}

  GetUser(){
    this.pickupService.getUser().subscribe(data=>{this.user=data});
  }

  nbCountPickupPending!:number;
  nbCountPickupRefunbded!:number;
  nbCountPickupOnTheWay!:number;
  nbCountPickupDeliverted!:number;
  nbCountPickupReturned!:number;
   //Stat Count To Seller
   CountPickupPending(){
   this.pickupService.CountPickupPending().subscribe(data=>{this.nbCountPickupPending=data;
    this.chartjs()});

  }
  CountPickupRefunbded(){
    this.pickupService.CountPickupRefunbded().subscribe(data=>{this.nbCountPickupRefunbded=data});
  }
  CountPickupOnTheWay(){
    this.pickupService.CountPickupOnTheWay().subscribe(data=>{this.nbCountPickupOnTheWay=data});
  }
  CountPickupDeliverted(){
    this.pickupService.CountPickupDeliverted().subscribe(data=>{this.nbCountPickupDeliverted=data;
      this.chartjs()});
  }
  CountPickupReturned(){
    this.pickupService.CountPickupReturned().subscribe(data=>{this.nbCountPickupReturned=data});
  }
  cps!:number;
  CountPickupAssigned(){
    this.pickupService.CountPickupAssigned().subscribe(data=>{this.cps=data;this.chartjs()});
  }
  cpt!:number;
  CountPickupTakedSeller(){
  this.pickupService.CountPickupTakedSeller().subscribe(data=>{this.cpt=data});
  }

  request!:Request[];
  LastRequestCreatedForSeller(){
   this.requestService.LastRequestCreatedForSeller().subscribe(data=>{this.request=data});
  }
request1!:Request;
idPickup!:number;
idRequest!:number;
statusRequest!:"test";
  addForm(_t51: NgForm) {
    this.request1=new Request;
    this.idRequest = _t51.controls["ir"].value;
    this.requestService.assignRequesttoseller(this.idRequest,this.statusRequest,this.idPickup).subscribe(data=>{this.request1=data;this.route.navigateByUrl('/Seller/pickupsInProgress');
     this.snackBar.open('The Request is Approved!', 'Close', {
     duration: 3000,
     verticalPosition: 'top',
     horizontalPosition: 'end',
     panelClass : ['green-snackbar'],
   });});
    console.log(this.idRequest);
   }
   assignidPickup(idPickup:number){
    this.idPickup=idPickup;
   }
   options: any;
   data: any;

   chartjs(){
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
    console.log(this.nbCountPickupPending);
      this.data = {
          labels: ['Picked', 'Assigned', 'Delivered'],
          datasets: [
              {
                  data: [this.nbCountPickupPending, this.cps, this.nbCountPickupDeliverted],
                  backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
              }
          ]
      };

      this.options = {
          plugins: {
              legend: {
                  labels: {
                      usePointStyle: true,
                      color: textColor
                  }
              }
          }
      };
  }

}
