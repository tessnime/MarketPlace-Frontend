import { Component } from '@angular/core';
import { AgencyService } from '../../sellerMohsen/servicesM/agency.service';
import { AgencyBranch } from 'Models/AgencyBranch';

@Component({
  selector: 'app-agency-map',
  templateUrl: './agency-map.component.html',
  styleUrls: ['./agency-map.component.scss']
})
export class AgencyMapComponent {
constructor(private agencyService:AgencyService){}
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
}
