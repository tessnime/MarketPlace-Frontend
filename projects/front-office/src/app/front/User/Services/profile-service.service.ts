import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'Models/User';
import { CookieService } from 'ngx-cookie-service';
const options = { withCredentials: true };
@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {


  urlGetUserBySession="http://localhost:8081/User/getUserBySession";
  urlUpdateUser="http://localhost:8081/User/update";

  constructor(private http: HttpClient ) { }

   GetUserBySession(){
    return this.http.get<User>(this.urlGetUserBySession,options)
  }

UpdateUser(user:User){
return this.http.put<User>(this.urlUpdateUser,user,options);
}

}
