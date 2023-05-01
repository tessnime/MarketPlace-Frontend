import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-buyer-of-pickup',
  templateUrl: './buyer-of-pickup.component.html',
  styleUrls: ['./buyer-of-pickup.component.scss']
})
export class BuyerOfPickupComponent {
constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
ngOnInit(){

}

}
