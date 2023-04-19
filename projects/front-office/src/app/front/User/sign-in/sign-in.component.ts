import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { first } from 'rxjs';
import { LoginUserService } from '../Services/login-user.service';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'Models/User';
import { RoleType } from 'Models/Enum/RoleType';

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
  constructor( public LoginUserService:LoginUserService ,private router:Router ,private route: ActivatedRoute,private cookieService: CookieService ){}
  ngOnInit() {
   
  }
  userLogin(){
  this.loading =true;
  this.LoginUserService.login(this.form.email,this.form.password)
  .pipe(first())
   .subscribe
   (
    () => {
      this.cookieService.get('accessToken');
      this.LoginUserService.getRole(this.form.email).subscribe(data=>{this.role=data
      
  console.log(data);
        alert(data)
      if (this.role === 'BUYER') {
        this.router.navigate(['/']); 
      } else if (this.role === 'SELLER') {
        this.router.navigate(['/store']); 
      }else if (this.role === 'DELIVERYMEN') {
        this.router.navigate(['/freelancer']);  
      }
    });
     },

error =>{
  this.error =error;
  this.loading=false;
});


  }
   redierctRole(email:String){
     
     this.LoginUserService.getRole(email).subscribe(data=>{this.role=data
      

      alert(data)
    if (this.role === 'BUYER') {
      this.router.navigate(['/']); 
    } else if (this.role === 'SELLER') {
      this.router.navigate(['/store']); 
    }else if (this.role === 'DELIVERYMEN') {
      this.router.navigate(['/freelancer']);  
    }
  });
  }

 

}
