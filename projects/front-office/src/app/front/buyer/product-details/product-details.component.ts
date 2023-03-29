import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HomeService} from "../services/home.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Product} from "../../../../../../../Models/Product";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import set = Reflect.set;
import {ProductQuantity} from "../../../../../../../Models/ProductQuantity";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router: Router, private home: HomeService, private snackBar: MatSnackBar, private ar: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  product!: Product;
  idp!: number;
  da: any = {};
  url!: string;
  videoUrl!: SafeResourceUrl;
  len!: number;
  Vued!: Product[];
  quantityNumber: number = 1;
  productQuantity!: ProductQuantity;


  ngOnInit() {
    this.idp = this.ar.snapshot.params['id'];
    this.home.addNewLastVuedProduct(this.idp).subscribe();
    this.home.getProductById(this.idp).subscribe(data => {
      this.product = data;
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.product.videoLink);
      this.home.lastVude().subscribe(data => {
        this.Vued = data
      });
    });
  }

  lastVued() {
    this.home.lastVude().subscribe(data => {
      this.Vued = data
    });
  }

  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
  }


  gotoDetails(id: number) {
    this.router.navigate(["/buyer/details", id]);
    this.ngOnInit();
  }

  updateQuantityNumber(nb: number) {
    if (this.product.quantity != 0)
      if ((nb == 1 && this.quantityNumber + nb <= this.product.quantity) || (nb == -1 && this.quantityNumber + nb > 1))
        this.quantityNumber = this.quantityNumber + nb;
  }

  slideLeft() {
    const container = document.querySelector('.slider-container')!;
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  slideRight() {
    const container = document.querySelector('.slider-container')!;
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }

  addProductToCart() {
    if (this.quantityNumber != 0) {
      this.productQuantity = new ProductQuantity(); // initialize productQuantity here
      this.productQuantity.quantity=this.quantityNumber;
      this.productQuantity.product=this.product;
      this.home.addProductToOrder(this.productQuantity).subscribe(() => {
        this.ngOnInit();
      });
    }
  }


  getFloor(integer: number): number {
    return Math.floor(integer);
  }
  countArray(n: number): number[] {
    return Array.from({length: n}, (_, index) => index + 1);
  }
}
