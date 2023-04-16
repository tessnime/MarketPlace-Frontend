import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyDeliveryMan } from 'Models/AgencyDeliveryMan';
import { RequestStatus } from 'Models/Enum/RequestStatus';
import { Pickup } from 'Models/Pickup';
import { Request, Request as re } from 'Models/Request';
import { AgencyService } from '../../sellerMohsen/servicesM/agency.service';
import { PickupService } from '../../sellerMohsen/servicesM/pickup.service';
import { RequestService } from '../../sellerMohsen/servicesM/request.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin } from 'rxjs';
import { Store } from 'Models/Store';
import { MatDialog } from '@angular/material/dialog';
import { MapOfPickupStoreComponent } from '../map-of-pickup-store/map-of-pickup-store.component';

@Component({
  selector: 'app-pickup-list',
  templateUrl: './pickup-list.component.html',
  styleUrls: ['./pickup-list.component.scss']
})
export class PickupListComponent {
  constructor(private pickupService:PickupService,private http: HttpClient,private requestService:RequestService,
    private agencyService:AgencyService,private route:ActivatedRoute,private r:Router,private snackBar: MatSnackBar,private dialog: MatDialog){}
  idPickup!:number;
  ngOnInit(){
   this.RetrievePickupBetweenAgencyAndstore();
  };

  request1!: re;
  DeliveryManId!:number;
  addForm(_t77:NgForm){
    this.request1=new re;
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
