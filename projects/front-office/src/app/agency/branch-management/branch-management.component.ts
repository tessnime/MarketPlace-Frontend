import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgencyBranch } from 'Models/AgencyBranch';
import { forkJoin } from 'rxjs';
import { AgencyService } from '../../sellerMohsen/servicesM/agency.service';

@Component({
  selector: 'app-branch-management',
  templateUrl: './branch-management.component.html',
  styleUrls: ['./branch-management.component.scss']
})
export class BranchManagementComponent {
addForm(_t52: NgForm) {
throw new Error('Method not implemented.');
}
  constructor(private agencyService:AgencyService){}
  ngOnInit(){
    this.retrieveAgencyBranchOfUser();

  }
  cdma: number[] = [];
  agencyBranch!: AgencyBranch[];

  retrieveAgencyBranchOfUser() {
    this.agencyService.retrieveAgencyBranchOfUser().subscribe(data => {
      this.agencyBranch = data;

      const requests = data.map(a => this.agencyService.countDeliveryMenInAgency(a.id));
      forkJoin(requests).subscribe((results: number[]) => {
        this.cdma = results;
      });
    });
  }

countDeliveryMenInAgency(idBranch: number, branch: AgencyBranch) {
  this.agencyService.countDeliveryMenInAgency(idBranch).subscribe(data => {
    this.cdma.push(data);
  });
}

deleteAgencyBranch(idBranch:number){
  this.agencyService.deleteAgencyBranch(idBranch).subscribe(()=>{this.retrieveAgencyBranchOfUser()});
}
}
