import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from 'Models/Store';
import { User } from 'Models/User';

@Injectable({
  providedIn: 'root'
})
export class PickupService {

  constructor(private http:HttpClient) { }
  //Url Seller
  urlstore="http://localhost:8081/Pickup/RetrieveStoreOfUser";
  urlUser="http://localhost:8081/Pickup/getUserNOw";
  urlCountPickupPending="http://localhost:8081/Pickup/countPickupSellerPendingToday";
  urlCountPickupRefunbded="http://localhost:8081/Pickup/countPickupSellerRefundedToday";
  urlCountPickupOnTheWay="http://localhost:8081/Pickup/countPickupSelleronTheWayToday";
  urlCountPickupReturned="http://localhost:8081/Pickup/countPickupSellerReturnToday";
  urlCountPickupDeliverted="http://localhost:8081/Pickup/countPickupSellerDeliveredToday";
  urlcountOrderByStoreNoPickup="http://localhost:8081/Pickup/countOrderBySellerNoPickup?idStore=";

//component List Of Store
  //FctgetStoreByUser
  getStoreByUser(){
    const options = { withCredentials: true };
    return this.http.get<Store[]>(this.urlstore,options);
    }
  countOrderByStoreNoPickup(idStore:number){
    const options = { withCredentials: true };
    return this.http.get<number>(this.urlcountOrderByStoreNoPickup+`${idStore}`,options)
  }
    //Fct get User Connected
    getUser(){
      const options = { withCredentials: true };
      return this.http.get<User>(this.urlUser,options);
    }
    //////Component Store Of List
    //Stat Count To Seller
    CountPickupPending(){
      const options = { withCredentials: true };
     return this.http.get<number>(this.urlCountPickupPending,options)
    }
    CountPickupRefunbded(){
      const options = { withCredentials: true };
      return this.http.get<number>(this.urlCountPickupRefunbded,options)
    }
    CountPickupOnTheWay(){
      const options = { withCredentials: true };
      return this.http.get<number>(this.urlCountPickupOnTheWay,options)
    }
    CountPickupDeliverted(){
      const options = { withCredentials: true };
      return this.http.get<number>(this.urlCountPickupDeliverted,options)
    }
    CountPickupReturned(){
      const options = { withCredentials: true };
      return this.http.get<number>(this.urlCountPickupReturned,options)
    }


}
