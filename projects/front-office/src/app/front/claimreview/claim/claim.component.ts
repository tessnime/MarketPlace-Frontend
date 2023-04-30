import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ClaimSav } from 'Models/ClaimSav';
import { ClaimSavStatusType } from 'Models/Enum/ClaimSavStatusType';
import { ClaimSavType } from 'Models/Enum/ClaimSavType';
import { ProductQuantity } from 'Models/ProductQuantity';
import { User } from 'Models/User';
import { ClaimreviewserviceService } from '../sevice/claimreviewservice.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss','../../../../assets/layout/styles/theme/lara-light-indigo/theme.css','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class ClaimComponent implements OnInit {


  constructor(private claimService:ClaimreviewserviceService,private router:Router,private route: ActivatedRoute) { }

  idProduct:number=0;
  ngOnInit(): void {
    this.idProduct = Number(this.route.snapshot.paramMap.get('id'));
  }

  claim!:ClaimSav;
  addForm(t7:NgForm){
          this.claim=new ClaimSav;
          this.claim.status=ClaimSavStatusType.NONTRAITE;
          this.claim.claimSavType=ClaimSavType.TECHNICAL_REPORT;
          // @ts-ignore
          this.claim.screenshot= this.selectedFile.name;
          this.claim.reference=t7.controls['ref'].value;
          this.claim.object=t7.controls['obj'].value;
          this.claim.body=t7.controls['body'].value;
          this.onUpload();
          this.claimService.addClaim(this.claim,this.idProduct).subscribe(() => {
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
