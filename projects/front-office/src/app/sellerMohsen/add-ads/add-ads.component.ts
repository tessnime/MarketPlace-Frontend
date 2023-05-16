import { Component } from '@angular/core';
import { AdsService } from '../servicesM/ads.service';
import { Ads } from 'Models/Ads';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from 'Models/Product';
import { BudgetType } from 'Models/Enum/BudgetType';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss']
})
export class AddAdsComponent {
  points=10;
  point:number=0;
  budgetTypee="DAILYBUDGET";
  objTypee="TRAFFIC";
  constructor(private adsService:AdsService,private formBuilder: FormBuilder,
    private r:Router,private snackBar: MatSnackBar){}
  ngOnInit() {
    this.getProductByUserSess();
  }
  idProduct!:number;
  ads!:Ads;
  addForm(t7:NgForm){
  this.ads=new Ads;
  this.ads.audiencesAgeMax=t7.controls['agemax'].value;
  this.ads.audiencesAgeMin=t7.controls['agemin'].value;
  this.ads.budgetType=t7.controls['BudgetType'].value;
  this.ads.startDate=t7.controls['startDate'].value;
  if(this.checkdata==1){
  this.ads.expiredDate=t7.controls['endDate'].value;
  }
  this.ads.gender=t7.controls['Gender'].value;
  this.ads.objectiveType=t7.controls['ObjectiveType'].value;
  this.ads.adsPoints=t7.controls['price'].value;
  this.adsService.assignAdsToProduct(this.ads,this.idProduct).subscribe(()=>{this.r.navigateByUrl("/store/myAds");
  this.snackBar.open('The Ads added with success!', 'Close', {
    duration: 3000,
    verticalPosition: 'top',
    horizontalPosition: 'end',
    panelClass : ['green-snackbar'],
  });
});
  }
  AddAds(ads:Ads,idProduct:number){
  }
  budgetType=[
    'DAILYBUDGET','LIFETIMEBUDGET'
  ];
  objType=[
    'TRAFFIC','SALES'
  ];
  checkdata=0;
  checked(){
    if(this.checkdata==0){
  this.checkdata=1;
  }
  else{
    this.checkdata=0;
  }
  }
  Gender=['MAN','WOMEN','ALL']

  product!:Product[];
  getProductByUserSess(){
  this.adsService.getProductByUserSess().subscribe(data=>this.product=data);
  }


  retrieveHMAwRWithAds(adsPoint:number,dateStart:Date,dateEnd:Date,budgetTupe:BudgetType){
    this.adsService.retrieveHMAwRWithAds(adsPoint,dateStart,dateEnd,budgetTupe).subscribe((data:number)=>{this.point=data;console.log(data)});
  }

  getReach(t7:NgForm){
    console.log('hiiiiiiiiiiiii')
    this.retrieveHMAwRWithAds(t7.controls['price']?.value,t7.controls['startDate']?.value,t7.controls['endDate']?.value,t7.controls['BudgetType']?.value);

  }
click:number=10;
ageMax!:any;
valueofAge(t7:NgForm){
 this.ageMax=t7.controls['agemin'].value;
}

}
