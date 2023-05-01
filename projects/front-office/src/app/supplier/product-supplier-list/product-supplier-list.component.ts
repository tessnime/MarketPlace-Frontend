import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'Models/Product';
import { Table } from 'primeng/table';
import { ProductSreviceService } from '../../seller/services/product-srevice.service';
import { SupplierRequestService } from '../../seller/services/supplier-request.service';
import { SupplierRequest } from 'Models/SupplierRequest';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from 'Models/Store';
import { StoreSupplierMapComponent } from '../store-supplier-map/store-supplier-map.component';
interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-product-supplier-list',
  templateUrl: './product-supplier-list.component.html',
  styleUrls: ['./product-supplier-list.component.scss']
})
export class ProductSupplierListComponent implements OnInit{
  constructor(private prod:SupplierRequestService,private dialog: MatDialog
    ){}
  ngOnInit(): void {
    this.prod.ProductsOutOfStock().subscribe(res=>{console.log(res);this.products=res;
       this.loading = false;
       console.log(this.products)
    })

  }
  display:boolean=false;
  products:Product[]=[];
  loading: boolean = true;
  delivQuantity!:number;
  delivDate:Date=new Date();
  unityP!:number;

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}
@ViewChild('filter') filter!: ElementRef;

clear(table: Table) {
  table.clear();
  this.filter.nativeElement.value = '';
}
supplierReq!:SupplierRequest;

addresquest(F:NgForm,idP:number){
this.supplierReq.deliveryDate=this.delivDate;
this.supplierReq.quantity=F.value.delivQuantity;
this.supplierReq.unityPrice=F.value.unityP;

return this.prod.createRequest(this.supplierReq,idP).subscribe(res=>{console.log(res);this.display=false;})

}

markerClick(prod:Product) {
  const dialogRef = this.dialog.open(StoreSupplierMapComponent, {
    data: { prod },
    width      : '100%',
    maxWidth   : '400px',
    height     : 'auto',
    hasBackdrop: true,
    maxHeight  : '700px',
  });
}
}
