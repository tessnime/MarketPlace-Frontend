import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-store-supplier-map',
  templateUrl: './store-supplier-map.component.html',
  styleUrls: ['./store-supplier-map.component.scss']
})
export class StoreSupplierMapComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {
    console.log(this.data);
  }
  lat = 34.12994324757124;
  lng = 9.461977919413103;
}
