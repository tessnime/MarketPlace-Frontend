import {Component} from '@angular/core';
import {HomeService} from "../services/home.service";
import {ProductQuantity} from "../../../../../../../Models/ProductQuantity";
import {Order} from "../../../../../../../Models/Order";
import {Router} from "@angular/router";
import {Shipping} from "../../../../../../../Models/Shipping";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PaymentType} from "../../../../../../../Models/Enum/PaymentType";





@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css','../../../../assets/layout/styles/theme/lara-light-indigo/theme.css','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
/**
 * @title Snack-bar with configurable position
 */
export class CartComponent {

  state:PaymentType=PaymentType.CASH_ON_DELIVERY;
  request!:ProductQuantity[];
  selectedValue!: string;
  form:any={};
  shipping!:Shipping;
  order!:Order;
  requestOrder!:Order;

  constructor(private router : Router,private home:HomeService,private snackBar: MatSnackBar) {
  }

  gotoHome()
  {
    this.router.navigate(["/buyer"]);
  }
  gotoCart()
  {
    this.router.navigate(["/buyer/cart"]);
  }
  gotoFinalize()
  {
    this.router.navigate(["buyer/cart/finaliseOrder"]);
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

  getListProduct(){
    this.home.loadPosts().subscribe(data =>{this.request=data;});
  }


  getBaskerOrder(){
    this.home.loadOrder().subscribe(data=> {this.requestOrder=data})
  }

  deleteCarte()
  {
    this.home.deleteCart().subscribe(()=>{this.getListProduct();this.refresh();});

  }

  updateQuantity(ref:string,quan:number)
  {
    this.home.updateQuantity(ref,quan).subscribe(data => {console.log(data);this.refresh();})

  }

  deleteProductFromOrder(ref:string)
  {
  this.home.deleteProductFromOrder(ref).subscribe(()=>{this.getListProduct();this.refresh();});
  }




}
