import { Component } from '@angular/core';
import { AgencyBranch } from 'Models/AgencyBranch';
import { AgencyService } from '../../sellerMohsen/servicesM/agency.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-branch-in-map',
  templateUrl: './add-branch-in-map.component.html',
  styleUrls: ['./add-branch-in-map.component.scss']
})
export class AddBranchInMapComponent {
constructor(private agencyService:AgencyService,private router:ActivatedRoute){}
agencyBranch!:AgencyBranch;
idBranch!:number;

ngOnInit(){
  this.idBranch=this.router.snapshot.params['idBranch'];
  this.RetrieveAgencyBranch(this.idBranch);
}
addForm(t7: NgForm) {
  const latitude = t7.controls['Latitude'].value;
  const longitude = t7.controls['Longitude'].value;

  // Retrieve the existing agency branch by ID
  this.agencyService.RetrieveAgencyBranch(this.idBranch).subscribe((agencyBranch: AgencyBranch) => {
    // Update the latitude and longitude values
    agencyBranch.x = latitude;
    agencyBranch.y = longitude;

    // Call the updatebRANCHwithMAP() method to update the agency branch on the server
    this.agencyService.updatebRANCHwithMAP(this.idBranch, agencyBranch).subscribe(() => {
      console.log('Agency branch updated successfully');
    }, (error) => {
      console.error('Failed to update agency branch', error);
    });
  }, (error) => {
    console.error('Failed to retrieve agency branch', error);
  });
}
title = 'My first AGM project';
  lat !:number;
  lng !:number;
  RetrieveAgencyBranch(idBranch:number){
   this.agencyService.RetrieveAgencyBranch(idBranch).subscribe(data=>{this.agencyBranch=data})
  }
}
