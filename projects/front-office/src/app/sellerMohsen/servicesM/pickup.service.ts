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


  //FctgetStoreByUser
  getStoreByUser(){
    const options = { withCredentials: true };
    return this.http.get<Store[]>(this.urlstore,options);
    }
    //Fct get User Connected
    getUser(){
      const options = { withCredentials: true };
      return this.http.get<User>(this.urlUser,options);
    }
}
