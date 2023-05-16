import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { first } from 'rxjs';
import { LoginUserService } from '../Services/login-user.service';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'Models/User';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class SignInComponent implements OnInit {

  form:any ={}
  loading = false;
  //submitted = false;
  //returnUrl!: string;
  error = '';
   user:  User  = new User();;
  role!:string;
  constructor(private jwtHelper:JwtHelperService,  public LoginUserService:LoginUserService ,private router:Router ,private route: ActivatedRoute,private cookieService: CookieService ){}
  ngOnInit() {

  }
  userLogin(){
  this.loading =true;
  this.LoginUserService.login(this.form.email,this.form.password).subscribe((response:any)=>{
    localStorage.setItem('token',response.accessToken)
    let decodedToken = this.jwtHelper.decodeToken(response.accessToken)
    let role = decodedToken.role[0];
    if (role === 'BUYER') {
      this.router.navigate(['/']);
    } else if (role === 'SELLER') {
      this.router.navigate(['/store']);
    }else if (role === 'DELIVERYMEN') {
      this.router.navigate(['/freelancer']);
    }
  },(error) =>{
    if(error.error){
      console.log(error)
    }
  })



  }



  goToForgetPass(){
    this.router.navigate(['/forgetPassword']);
  }

}
