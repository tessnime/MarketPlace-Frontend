import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-delivery-men-of-pickup',
  templateUrl: './view-delivery-men-of-pickup.component.html',
  styleUrls: ['./view-delivery-men-of-pickup.component.scss']
})
export class ViewDeliveryMenOfPickupComponent {
constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
ngOnInit(){
  console.log(this.data);
}

}
