import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {HomeService} from "../../buyer/services/home.service";
import {ProductQuantity} from "../../../../../../../Models/ProductQuantity";
import {Order} from "../../../../../../../Models/Order";

import { CookieServiceService } from '../../User/Services/cookie-service.service';

import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private home: HomeService,private cookieService: CookieService) {}

  points!: number
  link!:any;
  request!: ProductQuantity[];

  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
  }

  private roles: string[] = [];
  logedin:boolean=false;
  isLoggedIn=false;
  ret:boolean=false;
  sess:boolean=false;

  ngOnInit() :void {
    const token = localStorage.getItem('token');
    this.home.sessionReteurn().subscribe(data=>{this.sess=data;
    if(data==null)
      this.sess=false;
    if(this.sess){
      this.requestOrder=JSON.parse(this.cookieService.get('basket') || '{}');
      console.log(JSON.stringify(this.requestOrder));
      this.request=this.requestOrder.productQuantities;
      this.getListProduct();
      this.getBaskerOrder();
      this.loyalityPoints();
      if(JSON.stringify(this.requestOrder)!='{"pickups":[],"productQuantities":[],"promotionCodeList":[]}' && JSON.stringify(this.requestOrder)!='{}' ) {
        for(let i=0;i<this.requestOrder.productQuantities.length;i++) {
          this.home.addProductToOrder(this.requestOrder.productQuantities[i]).subscribe(data => {
            this.cookieService.set('basket', JSON.stringify(new Order()), {
              sameSite: 'None',
              secure: true,
              domain: 'localhost',
              path: '/'
            });
          });
        }

      }
    }
    else{
      this.requestOrder=JSON.parse(this.cookieService.get('basket') || '{}');
      this.request=this.requestOrder.productQuantities;
    }
    })

  }


  getListProduct() {
    this.home.loadPosts().subscribe(data => {
      this.request = data
    });
  }

  goToIndex() {
    this.router.navigate(["/buyer"])
  }

  goToCart() {
    this.router.navigate(["/buyer/cart"])
  }
  gotoFinalize()
  {
      this.router.navigate(["buyer/cart/finaliseOrder"]);
    }

  gotoOrderSettings()
  {
    this.router.navigate(["buyer/Orders"]);
  }
  requestOrder: Order=new Order();

  getBaskerOrder() {
    this.home.loadOrder().subscribe(data => (this.requestOrder = data))
  }

  basket:Order=new Order();
  deleteProductFromOrder(ref:string)
  {
    this.home.sessionReteurn().subscribe(data=>{this.sess=data;if(this.sess) {
      this.home.deleteProductFromOrder(ref).subscribe(() => {
        this.getListProduct();
        this.refresh();
      });
    }
    else
    {
      this.basket = JSON.parse(this.cookieService.get('basket') || '{}');
      for (let i = 0; i < this.basket.productQuantities.length; i++) {
        if (this.basket.productQuantities[i].product.reference === ref) {
          this.basket.productQuantities.splice(i, 1); // remove productQuantity from array
          i--; // decrement i to account for removed element
        }
      }
      this.cookieService.set('basket', JSON.stringify(this.basket), {
        sameSite: 'None',
        secure: true,
        domain: 'localhost',
        path: '/'
      });
      this.refresh();
    }
    });
  }

  loyalityPoints() {
    this.home.lyaltypoints().subscribe(data => {
      this.points = data
    })
  }

  aff:boolean=false;

  loyaltyToken()
  {
    this.aff=true;
    this.home.loyaltyToken().subscribe(response => {this.link=response})
  }

  copyToClipboard(): void {
    this.aff=false;
    const copyText = document.getElementById('myInput') as HTMLInputElement;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    const tooltip = document.getElementById('myTooltip');
    // @ts-ignore
    tooltip.innerHTML = 'Copied: ' + copyText.value;
    // @ts-ignore
    tooltip.style.display = 'inline-block';
  }

  resetTooltip(): void {
    const tooltip = document.getElementById('myTooltip');
    // @ts-ignore
    tooltip.innerHTML = 'Copy to clipboard';
    // @ts-ignore
    tooltip.style.display = 'none';
  }

  gotoDetails()
  {
    this.router.navigate(["/buyer/shop-side"]);
  }


  logout(){
    localStorage.clear()
    this.router.navigate(['/user/signin'])
  }



}


