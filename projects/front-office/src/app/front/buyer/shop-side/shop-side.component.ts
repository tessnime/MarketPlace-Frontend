import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {HomeService} from "../services/home.service";
import {ProductCategory} from "../../../../../../../Models/ProductCategory";
import {Product} from "../../../../../../../Models/Product";


@Component({
  selector: 'app-shop-side',
  templateUrl: './shop-side.component.html',
  styleUrls: ['./shop-side.component.scss']
})
export class ShopSideComponent {
  constructor(private router: Router, private home: HomeService) {}

  products!:Product[];
  products1!:Product[];
  min!:number;
  max!:number;
  filt:string='MOST_REQUESTED';
  mark:string='';
  categorie:string='';
  inputName:string='';
  form:any={};
  rate:number=0;


  markList:String[]=[];

  categories!:ProductCategory[];
  getAllCategories()
  {
    this.home.getAllProductCategories().subscribe(data=>{this.categories=data;
    for (let i = 0; i < this.categories.length; i++) {
      let vr = false;
      for (let j = 0; j < this.categories[i].subCategory.length; j++) {
        if (this.categories[j].subCategory.indexOf(this.categories[i])) {
          vr = true;
        }
      }
      if (!vr) {
        this.categories.splice(1, i);
      }
    }});
  }

  getAllProducts()
  {
    this.max=this.form.max;
    this.min=this.form.min;
    this.home.searchProduct(this.max,this.min,this.inputName,this.mark,this.categorie,this.filt).subscribe(data=>{this.products=data;this.productsWithRating()});
  }

  getProducts()
  {
    this.max=this.form.max;
    this.min=this.form.min;
    this.home.searchProduct(0,0,'','',this.categorie,this.filt).subscribe(data=>{this.products1=data;
    for (let i=0;i<this.products1.length;i++)
    {
      if (this.markList.indexOf(this.products1[i].store.seller.brandName)==-1)
      {
        this.markList[this.markList.length]=this.products1[i].store.seller.brandName;
      }
    }
      this.productsWithRating()
    });

  }

  getFloor(integer: number): number {
    return Math.floor(integer);
  }
  countArray(n: number): number[] {
    return Array.from({length: n}, (_, index) => index + 1);
  }


  productsWithRating()
  {
    for (let i=0;i<this.products.length;i++)
    {
      if(this.products[i].rating<this.rate) {
        this.products.splice(1, i);
      }
    }
  }

  setRate(rt:number)
  {
    this.rate=rt;
    this.getAllProducts();
    this.getProducts();
    this.productsWithRating();
  }


  gotoDetails(id:number)
  {
    this.router.navigate(["/buyer/details",id]);
  }

  vr!:boolean;
  ngOnInit() {
    this.form.max=0;
    this.form.min=0;
    this.getAllCategories()
    this.getAllProducts();
    this.getProducts();

  }



}
