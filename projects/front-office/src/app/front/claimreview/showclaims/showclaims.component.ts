import { Component } from '@angular/core';
import { ClaimreviewserviceService } from '../sevice/claimreviewservice.service';
import { Router } from '@angular/router';
import { ClaimSav } from 'Models/ClaimSav';

@Component({
  selector: 'app-showclaims',
  templateUrl: './showclaims.component.html',
  styleUrls: ['./showclaims.component.scss','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class ShowclaimsComponent {

  constructor(private claimService:ClaimreviewserviceService,private router:Router) { }

  ngOnInit(): void{
    this.getallclaims();
    console.log(this.getallclaims());
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
  

}
