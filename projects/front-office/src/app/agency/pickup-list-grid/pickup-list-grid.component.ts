import { Component } from '@angular/core';
import { PickupService } from '../../sellerMohsen/servicesM/pickup.service';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../../sellerMohsen/servicesM/request.service';
import { AgencyService } from '../../sellerMohsen/servicesM/agency.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Request } from 'Models/Request';
import { NgForm } from '@angular/forms';
import { RequestStatus } from 'Models/Enum/RequestStatus';
import { Pickup } from 'Models/Pickup';
import { Store } from 'Models/Store';
import { forkJoin } from 'rxjs';
import { AgencyDeliveryMan } from 'Models/AgencyDeliveryMan';
import { MapOfPickupStoreComponent } from '../map-of-pickup-store/map-of-pickup-store.component';

@Component({
  selector: 'app-pickup-list-grid',
  templateUrl: './pickup-list-grid.component.html',
  styleUrls: ['./pickup-list-grid.component.scss']
})
export class PickupListGridComponent {
  layout: string = 'list';

  constructor(private pickupService:PickupService,private http: HttpClient,private requestService:RequestService,
    private agencyService:AgencyService,private route:ActivatedRoute,private r:Router,private snackBar: MatSnackBar,private dialog: MatDialog){}
  idPickup!:number;
  ngOnInit(){
   this.RetrievePickupBetweenAgencyAndstore();
  };

  request1!: Request;
  DeliveryManId!:number;
  addForm(_t77:NgForm){
    this.request1=new Request;
    const selectedDeliveryManId = this.DeliveryManId;
    this.request1.requestStatus=RequestStatus.PENDING;
    this.requestService.AssignRequestDeliveryManToPickup(this.request1,selectedDeliveryManId,this.idPickup).subscribe(res =>{console.log('Request created');
    this.snackBar.open('The Request added with success!', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass : ['green-snackbar'],
    });
  });
    window.location.href = 'http://localhost:4200/agency/Requests';
  };
 pickup!:Pickup[];
 store:Store[]=[] ;
 RetrievePickupBetweenAgencyAndstore(){
  this.pickupService.RetrievePickupBeTAgencyAndStore().subscribe(data=>{this.pickup=data;
 const store=data.map(a=>this.pickupService.getStoreByPickup(a.id));
 forkJoin(store).subscribe((results:Store[])=>{
  this.store=results;console.log(results)
 })})
 };

deliveryMen!:AgencyDeliveryMan[];
getDeliveryManByPickup(idPickup:number){
  this.agencyService.retrieveDeliveryMenTOPickup(idPickup).subscribe(data=>{this.deliveryMen=data})
  this.idPickup=idPickup;
};
assignRequestDeliveryMenFreelancerandPickup(r:Request,idPickup:number){
 this.requestService.assignRequestDeliveryMenFreelancerandPickup(this.request1,this.idPickup).subscribe();
}
markerClick(store: Store) {
  const dialogRef = this.dialog.open(MapOfPickupStoreComponent, {
    data: { store },
    width      : '100%',
    maxWidth   : '400px',
    height     : 'auto',
    hasBackdrop: true,
    maxHeight  : '700px',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}
}
