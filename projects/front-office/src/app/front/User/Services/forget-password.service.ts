import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'Models/User';
import { Observable, map, pipe } from 'rxjs';

const options = { withCredentials: true };
const httpOptions ={
  headers :new HttpHeaders({'Content-Type':'application/json'})
};
const httpOptions1 ={
  headers :new HttpHeaders({'Content-Type':'application/text'})
};
@Injectable({
  providedIn: 'root'
})

export class ForgetPasswordService {
  
  urlCheckEmail="http://localhost:8081/ForgetPassword/checkEmail";
  urlCheckCode="http://localhost:8081/ForgetPassword/resetPassword?resetToken=";
  urlChangePassword="http://localhost:8081/ForgetPassword/changePass?resetToken=";
  constructor(private http: HttpClient ) { }
 
ForgetPass(resetPassword:string):Observable<string>{
return this.http.post<any>(this.urlCheckEmail,{email : resetPassword},httpOptions);
}

checkCode(resetToken:string){
return this.http.get<string>(this.urlCheckCode +`${resetToken}`,httpOptions1).pipe();
}

changePassword(resetToken:string,Password:string){
  return this.http.get<string>(this.urlChangePassword +`${resetToken}`+'&Password=' +`${Password}`,httpOptions1);
}


}
