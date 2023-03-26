import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CartComponent} from "../../buyer/cart/cart.component";
import {HomeService} from "../../buyer/services/home.service";
import {ProductQuantity} from "../../../../../../../Models/ProductQuantity";
import {Order} from "../../../../../../../Models/Order";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class HeaderComponent {
  constructor(private router : Router,private home:HomeService) {
  }
  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
  }
  ngOnInit() {
    this.getListProduct();
    this.getBaskerOrder();
  }
  request!:ProductQuantity[];

  getListProduct(){
    this.home.loadPosts().subscribe(data =>{this.request=data});
  }

  goToIndex()
  {
    this.router.navigate(["/buyer"])
  }
  goToCart()
  {
    this.router.navigate(["/buyer/cart"])
  }

  requestOrder!:Order;
  getBaskerOrder(){
    this.home.loadOrder().subscribe(data=>(this.requestOrder=data))
  }
  deleteProductFromOrder(ref:string)
  {
    this.home.deleteProductFromOrder(ref).subscribe(()=>{this.getListProduct();});
    this.refresh();
  }

}
