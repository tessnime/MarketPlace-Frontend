import {Component} from '@angular/core';
import {ProductQuantity} from "../../../../../../../Models/ProductQuantity";
import {Order} from "../../../../../../../Models/Order";
import {Router} from "@angular/router";
import {HomeService} from "../services/home.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Shipping} from "../../../../../../../Models/Shipping";

@Component({
  selector: 'app-finalize-order',
  templateUrl: './finalize-order.component.html',
  styleUrls: ['./finalize-order.component.css']
})
export class FinalizeOrderComponent {


  constructor(private router: Router, private home: HomeService, private snackBar: MatSnackBar) {
  }

  requestOrder!: Order;
  request!: ProductQuantity[];
  shipping!: Shipping[];


  ngOnInit() {
    this.getListProduct();
    this.getBaskerOrder();
    this.getAllUserShippings()
  }


  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
  }


  getListProduct() {
    this.home.loadPosts().subscribe(data => {
      this.request = data;
    });
  }


  getBaskerOrder() {
    this.home.loadOrder().subscribe(data => {
      this.requestOrder = data
    })
  }

  getAllUserShippings() {
    this.home.getAllUserShippings().subscribe(data => {
      this.shipping = data;
    })
  }



}
