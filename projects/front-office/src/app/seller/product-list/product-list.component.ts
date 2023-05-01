import { Component } from '@angular/core';
import { ProductSreviceService } from '../services/product-srevice.service';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { Product } from 'Models/Product';
import { NgForm } from '@angular/forms';
import { StoreServiceService } from '../services/store-service.service';
import { PromotionCode } from 'Models/PromotionCode';
import { now } from 'moment';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: any;

  sortOptions: SelectItem[] = [];

  sortOrder: number = 0;

  sortField: string = '';

  sourceCities: any[] = [];

  targetCities: any[] = [];

  orderCities: any[] = [];



  constructor(private productService: ProductSreviceService, private promortioncode: StoreServiceService) { }

  ngOnInit() {
      this.productService.getAllProductsBySeller().subscribe(res=>{console.log(res);this.products=res});

  
      this.sortOptions = [
          { label: 'Price High to Low', value: '!productPrice' },
          { label: 'Price Low to High', value: 'productPrice' }
      ];
  }
  display: boolean = false;

  onSortChange(event: any) {
      const value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      } else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }

  onFilter(dv: DataView, event: Event) {
      dv.filter((event.target as HTMLInputElement).value);
  }

  voucher!:string;
  endDate!:Date;
  promo!:PromotionCode;
  addPromotionCode(F:NgForm,id:number){
    //this.promo.startDate=new Date();
    this.promo.EndtDate=F.value.endDate;
    this.promo.voucher=F.value.voucher;
   return this.promortioncode.addPormotionCode(this.promo, id).subscribe(
        response => {
        //   const url = window.URL.createObjectURL(response);
        //   const a = document.createElement('a');
        //   a.href = url;
        //   a.download = 'qr-code.png';
        //   a.click();
        //   window.URL.revokeObjectURL(url);
          console.log(response)
        },
        error => {
          console.error(error);
        }
      );
        }
}
