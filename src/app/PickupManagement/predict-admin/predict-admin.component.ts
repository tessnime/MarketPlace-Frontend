import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Request } from 'Models/Request';
import { PickupService } from 'projects/front-office/src/app/sellerMohsen/servicesM/pickup.service';
import { RequestService } from 'projects/front-office/src/app/sellerMohsen/servicesM/request.service';

@Component({
  selector: 'app-predict-admin',
  templateUrl: './predict-admin.component.html',
  styleUrls: ['./predict-admin.component.scss']
})
export class PredictAdminComponent {
  constructor(private pickupService:PickupService,private requestService:RequestService){}
  ngOnInit(){
    this.sendDataRegLineaire();
    this. AllCo2User();
    this.preductRequest();
    this.retriveRequests();
  }
  addForm(t7:NgForm){

     this.getPredictCo2(t7.controls["GearAge"].value);
  }
  input(t7:NgForm){

    this.getPredictCo2(t7.controls["GearAge"].value);
  }
  sendDataRegLineaire(){
     this.pickupService.sendDataRegLineaire().subscribe();
  }
  co2:number=10;
  getPredictCo2(gearAge:number){
    this.pickupService.getPredictCo2(gearAge).subscribe(data=>{this.co2=data});
  }
  aco2!:number;
  AllCo2User(){
    this.pickupService.AllCo2User().subscribe(data=>{this.aco2=data});
  }
  preductRequest(){
    this.pickupService.preductRequest().subscribe();
  }
  requestPreduct=10;
  getprdeuctRequest(nbRequest:number){
    this.pickupService.getprdeuctRequest(nbRequest).subscribe(data=>{this.requestPreduct=data});
  }
  request(t7:NgForm){
    this.getprdeuctRequest(t7.controls["requestNb"].value);
    console.log(t7.controls["requestNb"].value);
  }
  requests!:Request[];
  nbR!:any;
  retriveRequests(){
    this.requestService.retriveRequests().subscribe(data=>{this.requests=data;this.nbR=data.length})
  }
}
