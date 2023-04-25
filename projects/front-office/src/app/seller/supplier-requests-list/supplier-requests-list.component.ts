import { Component ,OnInit, ViewChild, ElementRef} from '@angular/core';
import { Product } from 'Models/Product';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ProductSreviceService } from '../services/product-srevice.service';

interface expandedRows {
  [key: string]: boolean;
}
@Component({
  selector: 'app-supplier-requests-list',
  templateUrl: './supplier-requests-list.component.html',
  styleUrls: ['./supplier-requests-list.component.scss'],
  providers: [MessageService, ConfirmationService]

})
export class SupplierRequestsListComponent implements OnInit{
  constructor(private MessageService:MessageService ,private confirmationService: ConfirmationService,private productService:ProductSreviceService){

  }
  ngOnInit(): void {
   
          this.productService.getProductsOutOfStockBySeller().subscribe(res=>{console.log(res);this.products=res});

  }
  products: Product[] = [];
  isExpanded: boolean = false;

  expandedRows: expandedRows = {};

  expandAll() {
    if (!this.isExpanded) {
        this.products.forEach(product => product && product.name ? this.expandedRows[product.name] = true : '');

    } else {
        this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
}
confirm1(id:number) {
  this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Are you sure to perform this action?',
      accept: () => {
        this.MessageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        this.productService.accpetRequestBySeller(id).subscribe(r=>console.log((r))
        );
        console.log("test2222");

    },
    reject: () => {
        this.MessageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        console.log("test");

    }
  });
}
}
