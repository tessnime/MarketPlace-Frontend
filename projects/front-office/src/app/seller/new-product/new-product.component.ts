import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductStatus } from 'Models/Enum/ProductStatus';
import { Product } from 'Models/Product';
import { ProductCategory } from 'Models/ProductCategory';
import { Store } from 'Models/Store';
import { User } from 'Models/User';
import { MessageService } from 'primeng/api';
import { CategoryService } from '../services/category.service';
import { ProductSreviceService } from '../services/product-srevice.service';
import { StoreServiceService } from '../services/store-service.service';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  providers: [MessageService]

})
export class NewProductComponent implements OnInit {

  product: Product={
    id: 0,
    reference: '',
    name: '',
    description: '',
    productPrice: 0,
    productPriceBeforeDiscount: 0,
    deliveryPrice: 0,
    unityPriceFromSupplier: 0,
    rating: 0,
    automaticRequestAcceptance: 0,
    numberOfRatings: 0,
    quantity: 0,
    productWeight: 0,
    deliveryQuantity: 0,
    enabled: false,
    creationDate: new Date('2022-05-31'),
    numberOfPurchase: 0,
    productStatus: ProductStatus.PENDING,
    additionalDeliveryInstructions: '',
    image: '',
    productQuantities: [],
    productCategory: new ProductCategory,
    promotionCodes: [],
    store: new Store,
    reviews: [],
    supplierRequests: []
  };
  user!:User;
  uploadedFiles: any[] = [];

  categries: any[] = [];
  subcategries: any[] = [];
  storeNames: any[] ;

  stores:Store[]=[];


  filteredCategories: any[] = [];
  filteredSubCategories: any[] = [];

  selectedCategoryAdvanced!: string ;

  selectedSubAdvanced!: string;
  value1: any;

  value2: any;

  value3: any;

  value4: any;

  value5: any;

  value6: any;

  value7: any;

  value8: any;

  value9: any;

  value10: any;

  value11: any;

  value12: any;

  constructor(private prodcutService:ProductSreviceService,private messageService: MessageService,private catgeoryService: CategoryService,private storeService:StoreServiceService,private userService:UserService  ) { 

    this.storeNames = [
      {name: '', code: ''},
   
  ];
  }





  ngOnInit() {
    this.catgeoryService.getAllCategories().subscribe(cat => {
      console.log(cat);
      this.categries = cat;

    });
    this.catgeoryService.getAllSubCategories().subscribe(sub => { console.log(sub); this.subcategries = sub });
 
    this.userService.getUserLoggidIn().subscribe(user=>{this.user=user;this.stores=this.user.stores;console.log(user);
      console.log(this.stores[0].name);
      for(let i=0;i<this.stores.length;i++){
      this.storeNames[i].name=this.stores[i].name;
      this.storeNames[i].code=i;
      console.log(this.storeNames);}
     });
    

   
   
  }




  filterCategories(event: any) {
    const filtered: any = [];
    const query = event.query;
    for (let i = 0; i < this.categries.length; i++) {
      const cat = this.categries[i];
      if (cat.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(cat);
      }
    }

    this.filteredCategories = filtered;
  }


  filterSubCategories(event: any) {
    const filtered: any = [];
    const query = event.query;
    for (let i = 0; i < this.subcategries.length; i++) {
      const sub = this.subcategries[i];
      if (sub.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(sub);
      }
    }

    this.filteredSubCategories = filtered;
  }



  onUpload(event: { files: any; }) {
    
    for(let file of event.files) {
      this.uploadedFiles.push(file);
   }
     //this will fire toast notification after image upload
     this.messageService.add({severity: 'success', summary: 'File Uploaded', detail: ''});
  }


  add(F: NgForm ){
    console.log(F);
this.product.productPrice=this.value8;
this.product.quantity=this.value3;
this.product.productWeight=this.value4;
this.product.description=this.value12;
this.product.additionalDeliveryInstructions=this.value10;
this.product.name=this.value2;

console.log(this.product);
    this.prodcutService.createAndAssignCategoryAndSubCategory(this.product,this.selectedCategoryAdvanced,this.selectedSubAdvanced,this.value11).subscribe(res =>{console.log('Product created')})};
  


}
