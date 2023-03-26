import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductQuantity} from "../../../../../../../Models/ProductQuantity";
import {Order} from "../../../../../../../Models/Order";
import {Product} from "../../../../../../../Models/Product";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  GetBasketProduct='http://localhost:8081/order/GetBasketProduct';
  GetBasketOrder='http://localhost:8081/order/GetBasketOrder';
  DeleteBasket='http://localhost:8081/order/DeleteBasket';
  UpdateQuantityInOrder='http://localhost:8081/order/UpdateQuantityInOrder?refProuct=&quantity=';
  DeleteProductFromOrder='http://localhost:8081/order/DeleteProductFromOrder?refProduct=';


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

  deleteProductFromOrder(ref:string)
  {
    return this.http.delete<ProductQuantity>('http://localhost:8081/order/DeleteProductFromOrder?refProduct='+`${ref}`,this.options);
  }

  searchProduct(maxprix:number,minprix:number,nameProd:string,mark:string,categorie:string,filtre:String)
  {

    let url = 'http://localhost:8081/order/ProductResearch?maxPrix=' + `${maxprix}` + '&minPrix=' + `${minprix}`
    if(nameProd.length>0)
      url=url+'&nameProduct='+`${nameProd}`;

    if (categorie.length>0)
      url=url+'&categorie='+`${categorie}`;
    if(mark.length>0)
      url=url+'&mark='+`${mark}`;

    url=url+'&productFiltre='+`${filtre}`;
    return this.http.get<Product[]>(url,this.options);

  }
}
