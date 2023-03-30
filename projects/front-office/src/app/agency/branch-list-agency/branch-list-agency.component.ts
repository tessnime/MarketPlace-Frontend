import { Component } from '@angular/core';
import { AgencyBranch } from 'Models/AgencyBranch';
import { AgencyService } from '../../sellerMohsen/servicesM/agency.service';

@Component({
  selector: 'app-branch-list-agency',
  templateUrl: './branch-list-agency.component.html',
  styleUrls: ['./branch-list-agency.component.scss']
})
export class BranchListAgencyComponent {
constructor(private agencyService:AgencyService){}
ngOnInit(){
  this.retrieveAgencyBranchOfUser();
}
agencyBranch!:AgencyBranch[];
retrieveAgencyBranchOfUser(){
  this.agencyService.retrieveAgencyBranchOfUser().subscribe(data=>{this.agencyBranch=data});
}


}
