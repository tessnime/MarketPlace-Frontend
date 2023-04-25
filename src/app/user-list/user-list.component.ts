import { Component } from '@angular/core';
import { ServiceAdminService } from '../service-admin.service';
import { Router } from '@angular/router';
import { User } from 'Models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: any[] | undefined
 user!:User;

  constructor(private service: ServiceAdminService , private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(id: number){
   this.service.deleteUser(id).subscribe({
      
   })
   this.service.getUsers();
  

  }

 
   

}


