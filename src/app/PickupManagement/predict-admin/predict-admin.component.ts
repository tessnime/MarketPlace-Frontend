import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PickupService } from 'projects/front-office/src/app/sellerMohsen/servicesM/pickup.service';

@Component({
  selector: 'app-predict-admin',
  templateUrl: './predict-admin.component.html',
  styleUrls: ['./predict-admin.component.scss']
})
export class PredictAdminComponent {
  constructor(private pickupService:PickupService){}
  ngOnInit(){

    this. AllCo2User();
  }
  addForm(t7:NgForm){

     this.getPredictCo2(t7.controls["GearAge"].value);
  }
  input(t7:NgForm){
    this.sendDataRegLineaire();
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
}
