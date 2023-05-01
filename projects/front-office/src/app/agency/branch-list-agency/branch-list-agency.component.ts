import { Component } from '@angular/core';
import { AgencyBranch } from 'Models/AgencyBranch';
import { AgencyService } from '../../sellerMohsen/servicesM/agency.service';
import { forkJoin, zip } from 'rxjs';

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
cdm:number[]=[];
i!:number;
agencyBranch!:AgencyBranch[];
onPageChange(event: any) {
  this.p = event;
   this.retrieveAgencyBranchOfUser(); // Wait for the Promise to resolve
  // Update the page here
}
retrieveAgencyBranchOfUser(){
  this.agencyService.retrieveAgencyBranchOfUser().subscribe(data=>{this.agencyBranch=data;
    const requests = data.map(a=>this.agencyService.countDeliveryMenInBranch(a.id));
    forkJoin(requests).subscribe((results: number[]) => {
      this.cdm = results;});
      this.totalItems=data.length
    });
}
// declare a variable to hold the calculated index
startIndex: number = 0;

// calculate the start index based on the current page and number of items per page
calculateStartIndex() {
  this.startIndex = (this.p - 1) * this.itemsPerPage;
}
totalItems = 0;
p = 1; // current page number
itemsPerPage = 3; // number of items to display per page

}
