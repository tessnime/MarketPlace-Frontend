import { Component } from '@angular/core';
import { Product } from 'Models/Product';
import { MessageService } from 'primeng/api';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent   {
  product!: Product;

  categries: any[] = [];
  subcategries: any[] = [];
  uploadedFiles: any[] = [];

  
  filteredCategories: any[] = [];
  filteredSubCategories: any[] = [];
  
  selectedCategoryAdvanced :any[] = [];

  selectedSubAdvanced: any[] = [];

  constructor(private catgeoryService: CategoryService) { }

  
  

 

  ngOnInit() {
    this.catgeoryService.getAllCategories().subscribe(cat => {console.log(cat);
      this.categries = cat;

    });
    this.catgeoryService.getAllSubCategories().subscribe(sub=>{console.log(sub);this.subcategries=sub})
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






}
