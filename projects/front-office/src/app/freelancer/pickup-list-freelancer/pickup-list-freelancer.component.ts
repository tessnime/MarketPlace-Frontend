import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestStatus } from 'Models/Enum/RequestStatus';
import { Pickup } from 'Models/Pickup';
import { Request } from 'Models/Request';
import { PickupService } from '../../sellerMohsen/servicesM/pickup.service';
import { RequestService } from '../../sellerMohsen/servicesM/request.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin } from 'rxjs';
import { Store } from 'Models/Store';
import { MapOfPickupStoreComponent } from '../../agency/map-of-pickup-store/map-of-pickup-store.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pickup-list-freelancer',
  templateUrl: './pickup-list-freelancer.component.html',
  styleUrls: ['./pickup-list-freelancer.component.scss']
})
export class PickupListFreelancerComponent {
  constructor(private pickupService:PickupService,private http: HttpClient,private requestService:RequestService,
    private route:ActivatedRoute,private r:Router,private snackBar: MatSnackBar,private dialog: MatDialog){}
ngOnInit(){
  this.RetrievePickupsByGovernoratBetweenStoreAndDeliveryMenFreelancer();
}


request1!: Request;
idPickup!:number;
addForm(_t77:NgForm){
  this.request1=new Request;
  this.request1.requestStatus=RequestStatus.PENDING;
  this.requestService.assignRequestDeliveryMenFreelancerandPickup(this.request1,this.idPickup).subscribe(()=>{this.r.navigateByUrl('/freelancer/requests');
  this.snackBar.open('The Request added with success!', 'Close', {
    duration: 10000,
    verticalPosition: 'top',
    horizontalPosition: 'end',
    panelClass : ['green-snackbar'],
  });
});
  window.location.href = 'http://localhost:4200/freelancer/requests';

};
store:Store[]=[] ;

 pickup!:Pickup[];
 RetrievePickupsByGovernoratBetweenStoreAndDeliveryMenFreelancer(){
  this.pickupService.RetrievePickupsByGovernoratBetweenStoreAndDeliveryMenFreelancer().subscribe(data=>{this.pickup=data;
    const store=data.map(a=>this.pickupService.getStoreByPickup(a.id));
    forkJoin(store).subscribe((results:Store[])=>{
     this.store=results;console.log(results)
    })})
 }
 selectPickup(id: number) {
  this.idPickup = id;
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
