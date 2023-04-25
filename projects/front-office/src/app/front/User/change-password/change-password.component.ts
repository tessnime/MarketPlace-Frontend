import { Component, OnInit } from '@angular/core';
import { User } from 'Models/User';
import { ForgetPasswordService } from '../Services/forget-password.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VerificationCodeComponent } from '../verification-code/verification-code.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class ChangePasswordComponent implements OnInit {


public tok:string="";

  constructor( private ServiceForgetPass:ForgetPasswordService ,private router:Router ,private route: ActivatedRoute){

  } 
  ngOnInit(): void {
    //console.log('token ='+this.verif.token)
  }
  user:  User  = new User();
  form:any ={}
  
  
    

  changePassword(){
    
    this.ServiceForgetPass.changePassword(this.form.token, this.form.password).subscribe(
      data => {
        alert(data);
      },
      error => {
        console.error(error);
        // Handle the error here.
      }
    );
  }
}
