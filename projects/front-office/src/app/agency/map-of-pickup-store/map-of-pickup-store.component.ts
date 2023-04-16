import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-map-of-pickup-store',
  templateUrl: './map-of-pickup-store.component.html',
  styleUrls: ['./map-of-pickup-store.component.scss']
})
export class MapOfPickupStoreComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
