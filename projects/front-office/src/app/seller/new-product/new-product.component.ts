import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
import { ProductFormDTO } from 'Models/ProductFormDTO';


interface names {
  name: string, code: string
}
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  providers: [MessageService]

})
export class NewProductComponent implements OnInit, DoCheck {

  product: ProductFormDTO = {
    name: '',
    description: '',
    image: '',
    productPrice: 0,
    quantity: 0,
    productWeight: 0,
    additionalDeliveryInstructions: '',
    image1: '',
    image2: '',
    image3: '',
    productCategory: new ProductCategory,
    storesNames: [],
  }
  user!: User;
  uploadedFiles: any[] = [];

  categries: any[] = [];
  subcategries: any[] = [];
  storeNames: names[] = [];

  stores: Store[] = [];


  filteredCategories: any[] = [];
  filteredSubCategories: any[] = [];

  selectedCategoryAdvanced!: any;
  joker!: any;

  selectedSubAdvanced!: any;
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

  value11: any[] = [];
  value12: any;

  constructor(private prodcutService: ProductSreviceService, private messageService: MessageService, private catgeoryService: CategoryService, private storeService: StoreServiceService, private userService: UserService) { }
  ngDoCheck(): void {
    for (let c of this.subcategries) {
      if (this.selectedSubAdvanced == c) {
        this.selectedCategoryAdvanced = this.selectedSubAdvanced.category; break;
      }
      else {
        this.selectedCategoryAdvanced = this.joker;
      }

    }
  }



  ngOnInit() {

    this.catgeoryService.getAllCategories().subscribe((cat: any[]) => {
      this.categries = cat;

    });
    this.catgeoryService.getAllSubCategories().subscribe((sub: any[]) => {
      this.subcategries = sub
    });

    this.userService.getUserLoggidIn().subscribe((user: User) => {
      this.user = user; this.stores = this.user.stores;

      for (let i = 0; i < this.stores.length; i++) {

        this.storeNames.push({ name: this.stores[i].name, code: i.toString() })

      }
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



  onUpload(event: { files: File[]; }) {
    let i = 0;
    for (let file of event.files) {
      // let brandName = this.user.brandName;
      // const updatedFile = new File([file], brandName + file.name, { type: file.type });
      this.uploadedFiles.push(file);
      if (i == 0)
        this.product.image = file.name;
      if (i == 1)
        this.product.image1 = file.name;
      if (i == 2)
        this.product.image2 = file.name;
      if (i == 3)
        this.product.image3 = file.name;
      i++;

    }
    //this will fire toast notification after image upload
    this.messageService.add({ severity: 'success', summary: 'File Uploaded', detail: '' });
  }


  add(F: NgForm) {
    this.product.productPrice = this.value8;
    this.product.quantity = this.value3;
    this.product.productWeight = this.value4;
    this.product.description = this.value12;
    this.product.additionalDeliveryInstructions = this.value10;
    this.product.name = this.value2;
    //this.product.productCategory.name = this.selectedSubAdvanced;

    for (let c of this.subcategries) {
      if (c.name == this.selectedSubAdvanced.name) {
        this.product.productCategory.category = c;
        //this.product.productCategory.category.category=c.category;
      }
    }
    // this.product.productCategory.setCategory(new ProductCategory);
    // this.product.productCategory.category.name = this.selectedCategoryAdvanced;
    let i = 0;
    for (let s of this.value11) {
      this.product.storesNames[i] = s.name;
      i++;
    }
    this.prodcutService.createAndAssignCategoryAndSubCategory(this.product).subscribe((res: any) => { console.log('Product created') })
  };



}
