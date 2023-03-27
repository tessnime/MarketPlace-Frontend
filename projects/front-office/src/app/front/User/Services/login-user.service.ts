import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { LoginInfo } from '../Dto/login-info';
import { TokenStorageService } from '../token/token-storage.service';

const httpOptions ={
  headers :new HttpHeaders({'Content-Type':'application/json'})
};
const TOKEN_KEY = 'AuthToken';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  private currentUserSubject !:BehaviorSubject<any>;
  public currentUser!:Observable<any>;
  


  constructor( private http: HttpClient,private tokenStorage:TokenStorageService) { 
    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem(TOKEN_KEY));
    this.currentUser=this.currentUserSubject.asObservable();
  }
  
   public get currentUserValue(): any {
    return this.currentUserSubject.value;
   }

  
   
    login(email: string, password: string){
   
   return this.http.post<any>('http://localhost:8081/Authentication/auth',{ login: email, password: password },httpOptions)
   .pipe(map(user => {
    if (user && user.token){
      localStorage.setItem('currentUser',JSON.stringify(user));
    }
    return user;

   }));

  
    }}







