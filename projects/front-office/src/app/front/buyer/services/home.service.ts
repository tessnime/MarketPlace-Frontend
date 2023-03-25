import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {ProductQuantity} from "../model/productQuantity";
import {Order} from "../model/order";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  options = { withCredentials: true };
  loadPosts() {
   return  this.http.get<ProductQuantity[]>('http://localhost:8081/order/GetBasketProduct',this.options)
  }

  loadOrder(){
    return this.http.get<Order>('http://localhost:8081/order/GetBasketOrder',this.options)
  }
}
