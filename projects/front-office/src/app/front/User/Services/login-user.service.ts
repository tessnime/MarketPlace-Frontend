import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoleType } from 'Models/Enum/RoleType';
import { Role } from 'Models/Role';
import { User } from 'Models/User';
import { CookieService } from 'ngx-cookie-service';
import {  map, Observable } from 'rxjs';


const httpOptions ={
  headers :new HttpHeaders({'Content-Type':'application/json'})
};

const httpOptions1 ={
withCredentials:true,responseType:'text'
};

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {


  constructor( private http: HttpClient, private cookieService: CookieService) { 

  }
  
    register (user: User):Observable<Object>{
      console.log(user);
      return this.http.post('http://localhost:8081/User/add',user);
     }
   
    login(email: string, password: string):Observable<any>{
 
   return this.http.post<any>('http://localhost:8081/Authentication/auth',{ login: email, password: password },httpOptions)
   .pipe(map(AuthenticationResponse => {
  
    const token = AuthenticationResponse.accessToken;
    this.cookieService.set('accessToken', token);


   }));
    }

    getAccessToken(): string {
      // Get the access token from cookies
      return this.cookieService.get('accessToken');
    }


    getRole():Observable<string>{
      // @ts-ignore
      return this.http.get<string>('http://localhost:8081/Authentication/Role',httpOptions1)
    }

    affecteRole(idRole:number,idUser:number):Observable<any>{
      //@ts-ignore
      return this.http.post<any>('http://localhost:8081/User/affectRole' `${idRole}` + '&idUser=' + `${idUser}`,httpOptions1)
    }
}







