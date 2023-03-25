import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HomeService} from "../services/home.service";
import {Product} from "../model/product";
import {ProductQuantity} from "../model/productQuantity";
import {Order} from "../model/order";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class CartComponent {
  constructor(private home:HomeService) {
  }
  ngOnInit()
  {
    this.getListProduct();
    this.getBaskerOrder();
  }
  request!:ProductQuantity[];

  requestOrder!:Order;

  getListProduct(){
    this.home.loadPosts().subscribe(data =>{this.request=data});
  }

  getBaskerOrder(){
    this.home.loadOrder().subscribe(data=>(this.requestOrder=data))
  }

}