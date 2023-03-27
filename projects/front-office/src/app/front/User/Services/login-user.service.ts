import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { accessToken } from '../Dto/accessToken';
import { JwtResponse } from '../Dto/jwt-response';
import { LoginInfo } from '../Dto/login-info';
import { TokenStorageService } from '../token/token-storage.service';


const TOKEN_KEY = 'AuthToken';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  private currentUserSubject !:BehaviorSubject<any>;
  public currentUser!:Observable<any>;
  private baseUrllogin='http://localhost:8081/Authentication/auth';


  constructor( private httpClient: HttpClient,private tokenStorage:TokenStorageService) { 
    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem(TOKEN_KEY));
    this.currentUser=this.currentUserSubject.asObservable();
   

  }
   options = { withCredentials: true };
   public get currentUserValue(): any {
    return this.currentUserSubject.value;
   }

    login(LoginInfo :LoginInfo){
   //   return  this.httpClient.post<JwtResponse>('http://localhost:8081/Authentication/auth',this.options)
    return this.httpClient.post<accessToken>(this.baseUrllogin,LoginInfo,this.options)
   /* .pipe(map( data =>{
      this.saveUserData(data);
      return data;*/
    };}

/*private saveUserData(data: JwtResponse){
  this.tokenStorage.saveToken(data.accessToken);
  this.tokenStorage.saveEmail(data.email);
  this.tokenStorage.saveAuthorities(data.authorities);
  this.currentUserSubject.next(data.accessToken);
}
*/
  

  

 

