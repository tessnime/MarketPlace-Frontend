import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HomeService} from "../services/home.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Product} from "../../../../../../../Models/Product";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router : Router,private home:HomeService,private snackBar: MatSnackBar,private ar:ActivatedRoute,private sanitizer: DomSanitizer) {
  }

  product!:Product;
  idp!:number;
  da:any={};
  url!:string;
  videoUrl!: SafeResourceUrl;
  len!:number;
  Vued!:Product[];

  ngOnInit() {
    this.idp = this.ar.snapshot.params['id'];
    this.home.addNewLastVuedProduct(this.idp).subscribe();
    this.home.getProductById(this.idp).subscribe(data => {
      this.product = data;
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.product.videoLink);
      this.home.lastVude().subscribe(data =>{this.Vued=data});
    });
  }

  lastVued()
  {
    this.home.lastVude().subscribe(data =>{this.Vued=data});
  }

  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
  }


  gotoDetails(id:number)
  {
    this.router.navigate(["/buyer/details",id]);
    this.ngOnInit();
  }


}
