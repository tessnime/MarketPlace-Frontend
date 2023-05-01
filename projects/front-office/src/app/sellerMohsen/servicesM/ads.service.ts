import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Ads>(this.urlAssignAdsToProduct+`${idProduct}`,ads,{headers})
  }
  urlgetProductByUserSess="http://localhost:8081/getProductByUserSess";
  getProductByUserSess(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Product[]>(this.urlgetProductByUserSess,{headers});
  }
  urlretrieveHMAwRWithAds="http://localhost:8081/retrieveHMAwRWithAds?adsPoints=";
  retrieveHMAwRWithAds(adsPoint:number,dateStart:Date,dateEnd:Date,budgetTupe:BudgetType){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    if(adsPoint!=null && dateStart==null && dateEnd==null  ){
      return this.http.get<number>(this.urlretrieveHMAwRWithAds+`${adsPoint}`+'&budgetType='+`${budgetTupe}`,{headers});
    }
 /*   else if(adsPoint!=null && dateStart!=null){
      return this.http.get<number>(this.urlretrieveHMAwRWithAds+`${adsPoint}`+'&startDate='+`${dateStart}`+'&budgetType='+`${budgetTupe}`,options);
    }*/
  else{
    return this.http.get<number>(this.urlretrieveHMAwRWithAds+`${adsPoint}`+'&startDate='+`${dateStart}`+'&expiredDate='+`${dateEnd}`+'&budgetType='+`${budgetTupe}`,{headers});
  }
  }

  urlgetMyAds="http://localhost:8081/getMyAds";
  getMyAds(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Ads[]>(this.urlgetMyAds,{headers});
  }
  urldeleteAds="http://localhost:8081/deleteAds?idAds=";
  deleteAds(idAds:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<Ads>(this.urldeleteAds+`${idAds}`,{headers});
  }
}
