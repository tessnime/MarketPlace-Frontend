import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {HomeService} from "../../buyer/services/home.service";
import {ProductQuantity} from "../../../../../../../Models/ProductQuantity";
import {Order} from "../../../../../../../Models/Order";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router, private home: HomeService) {}

  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
  }

  ngOnInit() {
    this.getListProduct();
    this.getBaskerOrder();
    this.loyalityPoints()
  }

  request!: ProductQuantity[];

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

  requestOrder!: Order;

  getBaskerOrder() {
    this.home.loadOrder().subscribe(data => (this.requestOrder = data))
  }

  deleteProductFromOrder(ref: string) {
    this.home.deleteProductFromOrder(ref).subscribe(() => {
      this.getListProduct();
    });
    this.refresh();
  }

  points!: number
  link!:any;
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

}
