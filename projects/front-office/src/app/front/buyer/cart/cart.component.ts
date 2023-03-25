import { Component } from '@angular/core';
import {HomeService} from "../services/home.service";
import {ProductQuantity} from "../../../../../../../Models/ProductQuantity";
import {Order} from "../../../../../../../Models/Order";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class CartComponent {
  constructor(private router : Router,private home:HomeService) {
  }
  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
  }
  ngOnInit()
  {
    this.getListProduct();
    this.getBaskerOrder();
  }
  request!:ProductQuantity[];
  getListProduct(){
    this.home.loadPosts().subscribe(data =>{this.request=data});
  }


  requestOrder!:Order;
  getBaskerOrder(){
    this.home.loadOrder().subscribe(data=>(this.requestOrder=data))
  }

  deleteCarte()
  {
    this.home.deleteCart().subscribe(()=>{this.getListProduct();});
    location.reload();
  }

  updateQuantity(ref:string,quan:number)
  {
    this.home.updateQuantity(ref,quan).subscribe(data => {console.log(data);})
    this.refresh();
  }

}
