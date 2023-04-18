import { Component } from '@angular/core';
import { User } from 'Models/User';
import { ProductSreviceService } from '../services/product-srevice.service';
import { MessageService } from 'primeng/api';
import { CategoryService } from '../services/category.service';
import { StoreServiceService } from '../services/store-service.service';
import { UserService } from '../services/user.service';
import { Store } from 'Models/Store';
import { ProductFormDTO } from 'Models/ProductFormDTO';
import { ProductCategory } from 'Models/ProductCategory';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'Models/Product';
import { ProductStatus } from 'Models/Enum/ProductStatus';

interface names {
  name: string, code: string
}
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
  providers: [MessageService]

})
export class UpdateProductComponent {

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
    id: 0
  }

  product1: Product = {
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
    numberOfPurchase: 0,
    additionalDeliveryInstructions: '',
    image: '',
    productQuantities: [],
    promotionCodes: [],
    reviews: [],
    supplierRequests: [],
    image1: '',
    image2: '',
    image3: '',
    videoLink: '',
    creationDate: new Date,
    productStatus: ProductStatus.PENDING,
    productCategory: new ProductCategory,
    store: new Store
  };

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

  constructor(private act: ActivatedRoute, private prodcutService: ProductSreviceService, private messageService: MessageService, private catgeoryService: CategoryService, private storeService: StoreServiceService, private userService: UserService) { }
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
    // TODO : get the producForm data to display in the form 
    this.prodcutService.getProductById(this.act.snapshot.params['id']).subscribe(prod => {
      this.product1.id = prod.id;
      this.product1.name = prod.name;
      this.product1.description = prod.description;
      this.product1.image = prod.image;
      this.product1.productCategory = prod.productCategory;
      this.product1.productPrice = prod.productPrice;
      this.product1.productWeight = prod.productWeight;
      this.product1.quantity = prod.quantity;
      this.product1.additionalDeliveryInstructions = prod.additionalDeliveryInstructions;
      this.product1.image1 = prod.image1;
      this.product1.image2 = prod.image2;
      this.product1.image3 = prod.image3;
      this.product1.store = prod.store;
      this.product.id = this.product1.id;
      this.product.name = this.product1.name;
      this.product.description = this.product1.description;
      this.product.image = this.product1.image;
      this.product.productCategory = this.product1.productCategory;
      this.product.productCategory.category = prod.productCategory.category;
      this.product.productPrice = this.product1.productPrice;
      this.product.productWeight = this.product1.productWeight;
      this.product.quantity = this.product1.quantity;
      this.product.additionalDeliveryInstructions = this.product1.additionalDeliveryInstructions;
      this.product.image1 = this.product1.image1;
      this.product.image2 = this.product1.image2;
      this.product.image3 = this.product1.image3;
      this.product.storesNames[0] = this.product1.store.name;
      this.storeNames.push({ name: this.product.storesNames[0], code: this.product.name.substring(0, 2) })
      this.value11 = this.product.storesNames;

      console.log(this.product)
    })



    this.catgeoryService.getAllCategories().subscribe((cat: any[]) => {
      this.categries = cat;

    });
    this.catgeoryService.getAllSubCategories().subscribe((sub: any[]) => {
      this.subcategries = sub
    });

    // this.userService.getUserLoggidIn().subscribe((user: User) => {
    //   this.user = user; this.stores = this.user.stores;

    //   for (let i = 0; i < this.stores.length; i++) {

    //     this.storeNames.push({ name: this.stores[i].name, code: i.toString() })

    //   }
    // });




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


  update(F: NgForm) {

    this.product1.name = this.product.name
    this.product1.description = this.product.description;
    this.product1.image = this.product.image;
    this.product1.productCategory = this.product.productCategory;
    this.product1.productPrice = this.product.productPrice;
    this.product1.productWeight = this.product.productWeight;
    this.product1.quantity = this.product.quantity;
    this.product1.additionalDeliveryInstructions = this.product.additionalDeliveryInstructions;
    this.product1.image1 = this.product.image1;
    this.product1.image2 = this.product.image2;
    this.product1.image3 = this.product.image3;
    for (let c of this.subcategries) {
      if (c.name == this.product.productCategory.name) {
        this.product1.productCategory.category = c;
      }
    }

    this.prodcutService.updateProduct(this.product1).subscribe((res: any) => { console.log('Product updated') })
  };

}