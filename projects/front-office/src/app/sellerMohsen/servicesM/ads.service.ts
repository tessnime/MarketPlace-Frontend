import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ads } from 'Models/Ads';
import { BudgetType } from 'Models/Enum/BudgetType';
import { Product } from 'Models/Product';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private http:HttpClient) { }
  urlAssignAdsToProduct="http://localhost:8081/AssignAdsToProduct?idProduct=";
  assignAdsToProduct(ads:Ads,idProduct:number){
    const options = { withCredentials: true };
    return this.http.post<Ads>(this.urlAssignAdsToProduct+`${idProduct}`,ads,options)
  }
  urlgetProductByUserSess="http://localhost:8081/getProductByUserSess";
  getProductByUserSess(){
    const options = { withCredentials: true };
    return this.http.get<Product[]>(this.urlgetProductByUserSess,options);
  }
  urlretrieveHMAwRWithAds="http://localhost:8081/retrieveHMAwRWithAds?adsPoints=";
  retrieveHMAwRWithAds(adsPoint:number,dateStart:Date,dateEnd:Date,budgetTupe:BudgetType){
    const options = { withCredentials: true };
    if(adsPoint!=null && dateStart==null && dateEnd==null  ){
      return this.http.get<number>(this.urlretrieveHMAwRWithAds+`${adsPoint}`+'&budgetType='+`${budgetTupe}`,options);
    }
 /*   else if(adsPoint!=null && dateStart!=null){
      return this.http.get<number>(this.urlretrieveHMAwRWithAds+`${adsPoint}`+'&startDate='+`${dateStart}`+'&budgetType='+`${budgetTupe}`,options);
    }*/
  else{
    return this.http.get<number>(this.urlretrieveHMAwRWithAds+`${adsPoint}`+'&startDate='+`${dateStart}`+'&expiredDate='+`${dateEnd}`+'&budgetType='+`${budgetTupe}`,options);
  }
  }
}
