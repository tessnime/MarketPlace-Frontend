import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductQuantity} from "../../../../../../../Models/ProductQuantity";
import {Order} from "../../../../../../../Models/Order";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  GetBasketProduct='http://localhost:8081/order/GetBasketProduct';
  GetBasketOrder='http://localhost:8081/order/GetBasketOrder';
  DeleteBasket='http://localhost:8081/order/DeleteBasket';
  UpdateQuantityInOrder='http://localhost:8081/order/UpdateQuantityInOrder?refProuct=&quantity='

  constructor(private http:HttpClient) { }
  options = { withCredentials: true };
  loadPosts() {
   return  this.http.get<ProductQuantity[]>(this.GetBasketProduct,this.options);
  }

  loadOrder(){
    return this.http.get<Order>(this.GetBasketOrder,this.options);
  }

  deleteCart()
  {
    return this.http.delete<Order>(this.DeleteBasket,this.options);
  }

  updateQuantity(ref:string,quan:number)
  {
    return this.http.put<ProductQuantity>('http://localhost:8081/order/UpdateQuantityInOrder?refProuct='+`${ref}`+'&quantity='+`${quan}`,null,this.options)
  }
}
