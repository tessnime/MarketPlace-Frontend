import { Component } from '@angular/core';
import { ForgetPasswordService } from '../Services/forget-password.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'Models/User';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})


export class VerificationCodeComponent {

public token:string=' ';


  constructor( private ServiceForgetPass:ForgetPasswordService ,private router:Router ,private route: ActivatedRoute){

  }

  user:  User  = new User();
  form:any ={}

  checkEmail(){


    this.ServiceForgetPass.ForgetPass(this.form.email).subscribe();

  };


  verifyCode(){
    this.ServiceForgetPass.checkCode(this.form.token).subscribe((data: any) => {

      if (data.isValidToken) {

        this.router.navigate(['/verificationCode/changePass/'+this.form.token]);
      } else {
        alert("Invalid Code Try Again Please")
      }
    }

     )
    };


  };








