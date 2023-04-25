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
  
    register (user: User,idRole:number):Observable<Object>{
      return this.http.post('http://localhost:8081/User/add?idRole='+`${idRole}`,user);
     }
   
    login(email: string, password: string){
      
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


    getRole(email:String):Observable<string>{
      // @ts-ignore
      const options = { withCredentials: true };
      return this.http.get<string>('http://localhost:8081/User/role?email='+`${email}`,options)
    }

    affecteRole(idRole:number,idUser:number):Observable<any>{
      //@ts-ignore
      return this.http.post<any>('http://localhost:8081/User/affectRole' `${idRole}` + '&idUser=' + `${idUser}`,httpOptions1)
    }
    urlfindRolebyRoleType="http://localhost:8081/Role/findRolebyRoleType?roleType=";
    getRoleByType(role:RoleType){
       return this.http.get<Role>(this.urlfindRolebyRoleType+`${role}`);
    }


    
}







