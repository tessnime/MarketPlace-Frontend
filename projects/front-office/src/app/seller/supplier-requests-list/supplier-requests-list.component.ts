import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'Models/Product';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ProductSreviceService } from '../services/product-srevice.service';
import { StoreServiceService } from '../services/store-service.service';
import { SupplierRequestService } from '../services/supplier-request.service';
import { SupplierRequest } from 'Models/SupplierRequest';

interface expandedRows {
  [key: string]: boolean;
}
@Component({
  selector: 'app-supplier-requests-list',
  templateUrl: './supplier-requests-list.component.html',
  styleUrls: ['./supplier-requests-list.component.scss'],
  providers: [MessageService, ConfirmationService]

})
export class SupplierRequestsListComponent implements OnInit {
  constructor(private MessageService: MessageService, private confirmationService: ConfirmationService, private productService: ProductSreviceService, private storeservice: SupplierRequestService) {
  }
  displayConfirmationDialog= false;

  ngOnInit(): void {

    this.productService.getProductsOutOfStockBySeller().subscribe(res => { console.log(res); this.products = res });

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
  confirm1(id: SupplierRequest) {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Are you sure to perform this action?',
      accept: () => {
        this.MessageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        this.storeservice.accpetRequestBySeller(id).subscribe(r => console.log(r));
        this.dipslay=false;
         // this.refresh();

      },
      reject: () => {
        this.MessageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        console.log("test");

      }
    });
  }
  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
  }
  isApproved(request: SupplierRequest) {
    return request.requestStatus === 'WAITING_FOR_VALIDATION' || request.requestStatus ===  'ACCEPTED';
  }

  selectedSuppRequest: any; // change 'any' to the correct type of suppRequest

  dipslay=false

  showConfirmationDialog(suppRequest: any) {
    this.selectedSuppRequest = suppRequest;
    this.displayConfirmationDialog = true;
  }

  cofirmDelivery(id:number){
    this.storeservice.ConfirmDelivery(id).subscribe();
  }
}
