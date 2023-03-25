import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class HeaderComponent {
  constructor(private router : Router) {
  }
  goToIndex()
  {
    this.router.navigate(["/buyer"])
  }
  goToCart()
  {
    this.router.navigate(["/buyer/cart"])
  }
}
