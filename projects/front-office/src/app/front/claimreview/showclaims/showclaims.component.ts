import { Component } from '@angular/core';
import { ClaimreviewserviceService } from '../sevice/claimreviewservice.service';
import { Router } from '@angular/router';
import { ClaimSav } from 'Models/ClaimSav';
import {User} from "../../../../../../../Models/User";
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-showclaims',
  templateUrl: './showclaims.component.html',
  styleUrls: ['./showclaims.component.scss','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class ShowclaimsComponent {

  constructor(private claimService:ClaimreviewserviceService,private router:Router) { }
user:User=new User();
  ngOnInit(): void{
    this.claimService.getUserSession().subscribe(data=> {
      this.user = data;
      this.getallclaims();
      console.log(this.getallclaims());
    })
  }
  getallclaims(){this.claimService.getClaims().subscribe(
    (data) => {
      this.claims = data;
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );}
  claims!:ClaimSav[];
  searchTerm!: string;

  gotoHome()
  {
    this.router.navigate(["/buyer"]);
  }
  gotoCart()
  {
    this.router.navigate(["/buyer/cart"]);
  }

  updateClaim(claim: ClaimSav): void {
    this.router.navigate(['/edit-claim', claim.id]);
  }

  deleteClaim(id: number): void {
    if (confirm("Are you sure you want to delete this claim?")) {
      this.claimService.deleteClaim(id).subscribe(() => {
        this.claims = this.claims.filter(c => c.id !== id);
      });
    }
  }

  filterClaims(): void {
    const filterValue = this.searchTerm.trim().toLowerCase();
    if (filterValue) {
      this.claims = this.claims.filter((claim) =>
        claim.reference.toLowerCase().includes(filterValue) ||
        claim.object.toLowerCase().includes(filterValue) ||
        claim.status.toLowerCase().includes(filterValue)
      );
    } else {
      this.getallclaims();
    }
  }

  paginationConfig: PaginationInstance = {
    id: 'table-pagination',
    itemsPerPage: 5,
    currentPage: 1
  };

  onPageChange(pageNumber: number) {
    this.paginationConfig.currentPage = pageNumber;
  }


}