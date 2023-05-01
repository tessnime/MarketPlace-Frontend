import { Component } from '@angular/core';
import { AgencyService } from '../../sellerMohsen/servicesM/agency.service';
import { AgencyBranch } from 'Models/AgencyBranch';
import { MatDialog } from '@angular/material/dialog';
import { MapDetailsAgencyComponent } from '../map-details-agency/map-details-agency.component';


@Component({
  selector: 'app-agency-map',
  templateUrl: './agency-map.component.html',
  styleUrls: ['./agency-map.component.scss']
})
export class AgencyMapComponent {
constructor(private agencyService:AgencyService,private dialog: MatDialog){}
ngOnInit(){
  this.retrieveAgencyBranchOfUser();
}
branch!:AgencyBranch[];
retrieveAgencyBranchOfUser(){
  this.agencyService.retrieveAgencyBranchOfUser().subscribe(data=>{this.branch=data;console.log(data)});
}
title = 'My first AGM project';
lat = 34.12994324757124;
lng = 9.461977919413103;
markerClick(branch: AgencyBranch) {
  const dialogRef = this.dialog.open(MapDetailsAgencyComponent, {
    data: { branch },
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
