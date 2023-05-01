import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<User>(this.urlGetUserBySession,{headers})
  }

  

UpdateUser(user:User){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
return this.http.put<User>(this.urlUpdateUser,user,{headers});
}

getUserById(id: any) {
  const token = localStorage.getItem('token');
  return this.http.get(`http://localhost:8081/User/user/${id}`,{headers:new HttpHeaders({ 'Content-Type': 'application/json' , Authorization : 'Bearer '+token! })})
}

}
