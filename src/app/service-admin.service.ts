import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'Models/User';
import { Observable } from 'rxjs';
import {UsersRole} from "../../Models/UsersRole";
import {Role} from "../../Models/Role";

const options = { withCredentials: true };

@Injectable({
  providedIn: 'root'
})

export class ServiceAdminService {

  url = "http://localhost:8081/User/";

   urlgetUsers = "http://localhost:8081/User/users";
   urlDeleteUser="http://localhost:8081/User/delete/{id}?id=";
   urlUpdateUser="http://localhost:8081/User/update/{id}?id=";
   urlGetUserById="http://localhost:8081/User/user/{id}?id=";
   urlAddUser="http://localhost:8081/User/add?idRole=";
  Upload="http://localhost:8081/User/upload"
  UserRole="http://localhost:8081/User/StatsByRole"
  GetAllRoles="http://localhost:8081/User/getAllRoles"

  constructor(private http: HttpClient) { }

  // Add User - Create
  adduser(user: User,role:number){
    
    return this.http.post<User>(this.urlAddUser+`${role}`, user,options);
  }

  // Get Users - Read
  getUsers(): Observable<any[]>{
    const options = { withCredentials: true };
    return this.http.get<any[]>(this.urlgetUsers,options);
  }

  // Get User by Id - Read
  getUserById(id: number){
    return  this.http.get<User>(this.urlGetUserById,options);
  }

  // Update User - Update
  updateUser(id: number,user: User){
    return this.http.put<User>(this.urlUpdateUser +`${id}`,user,options);
  }

  // Delete User - Delete
  deleteUser(id: number){
    return this.http.delete<User>(this.urlDeleteUser +`${id}`,options);
  }


  upload(image: File | null | undefined)
  {
    const formData = new FormData();
    // @ts-ignore
    formData.append('file', image, image.name);
    return this.http.post(this.Upload,formData,options);
  }

  UsersByRole()
  {
    return this.http.get<UsersRole[]>(this.UserRole,options);
  }
  getAllRoles()
  {
    return this.http.get<Role[]>(this.GetAllRoles,options);
  }
}
