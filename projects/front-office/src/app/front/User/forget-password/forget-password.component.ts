import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../Services/login-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'Models/User';
import { ForgetPasswordService } from '../Services/forget-password.service';
import { first } from 'rxjs';
import { resetPassword } from '../Dto/ResetPassword';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class ForgetPasswordComponent implements OnInit {
  email!: string;
  
  
  ngOnInit(): void {
   
  }

  constructor( private ServiceForgetPass:ForgetPasswordService ,private router:Router ,private route: ActivatedRoute){

  }

  user:  User  = new User();
  form:any ={}
  
  checkEmail(){
    
    
    this.ServiceForgetPass.ForgetPass(this.form.email).subscribe()
      {
        this.router.navigate(['/verificationCode']);
  
};
  };

goToLogin()
{
this.router.navigate(['/user/signin']);
}





}
