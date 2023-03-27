import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'Models/User';
import { first } from 'rxjs';
import { accessToken } from '../Dto/accessToken';
import { JwtResponse } from '../Dto/jwt-response';
import { LoginInfo } from '../Dto/login-info';
import { LoginUserService } from '../Services/login-user.service';
import { TokenStorageService } from '../token/token-storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class SignInComponent implements OnInit {

  form:any ={}
  token!:accessToken;
  
 

  constructor( private LoginUserService:LoginUserService ,private tokenStorage: TokenStorageService,private router:Router){}
  ngOnInit(): void {
   
  }
  userLogin(){
  
  alert(this.form.password)
    this.LoginUserService.login(new LoginInfo(this.form.email,this.form.password ))
   .subscribe
   (
     data => {this.token=data;
      alert(this.token.accessToken)
   
    })
    alert("error");
    
  }


}
