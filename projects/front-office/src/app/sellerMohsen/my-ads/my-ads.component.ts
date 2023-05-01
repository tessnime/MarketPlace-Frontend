import { Component } from '@angular/core';
import { AdsService } from '../servicesM/ads.service';
import { Ads } from 'Models/Ads';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent {
constructor(private adsService:AdsService,private snackBar:MatSnackBar){

}
ngOnInit(){
  this.getMyAds();
}
totalItems = 0;
  p = 1; // current page number
  itemsPerPage = 8; // number of items to display per page
ads!:Ads[];
getMyAds(){
  this.adsService.getMyAds().subscribe(data=>{this.ads=data;this.totalItems = data.length;});
}
onPageChange(event: any): void {
  this.p = event;
  this.getMyAds();
}
deleteAds(idAds:number){
  this.adsService.deleteAds(idAds).subscribe(()=>{
    this.snackBar.open('The Ads Deleted with success!', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass : ['green-snackbar'],
    });this.getMyAds()

  })
}
}
