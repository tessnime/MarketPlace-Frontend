import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClaimSav } from 'Models/ClaimSav';
import { ClaimSavStatusType } from 'Models/Enum/ClaimSavStatusType';
import { ClaimSavType } from 'Models/Enum/ClaimSavType';
import { ClaimreviewserviceService } from '../sevice/claimreviewservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-claim',
  templateUrl: './edit-claim.component.html',
  styleUrls: ['./edit-claim.component.scss','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class EditClaimComponent implements OnInit {
  constructor(private claimService:ClaimreviewserviceService,private router:Router,private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.claimService.getClaimById(id).subscribe(
      claim => {
        this.claim = claim;
      },
      error => {
        console.log(error);
      }
    );
  }

  claim!:ClaimSav;
  updateForm(t7:NgForm){
          this.claim=new ClaimSav;
          this.claim.status=ClaimSavStatusType.NONTRAITE;
          this.claim.claimSavType=ClaimSavType.TECHNICAL_REPORT;
          // @ts-ignore
          this.claim.screenshot= this.selectedFile.name;
          this.claim.reference=t7.controls['reference'].value;
          this.claim.object=t7.controls['object'].value;
          this.claim.body=t7.controls['body'].value;
          const id = this.route.snapshot.paramMap.get('id');
          this.onUpload();
          this.claimService.updateClaim({ ...this.claim, id: Number(id) }).subscribe(() => {
            this.router.navigate(['/claims']);
          });
  }

  gotoHome()
  {
    this.router.navigate(["/buyer"]);
  }

  selectedFile!: File | null | undefined;
  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedFile = inputElement.files?.item(0);
  }

  onUpload() {
    this.claimService.upload(this.selectedFile).subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
