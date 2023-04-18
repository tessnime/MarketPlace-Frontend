import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layoutB/app.layout.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [

  {
    path:'',component:AppLayoutComponent,
    children:[
      {path:'',component:UserDashboardComponent},
      {path:'userlist',component:UserListComponent},
      {path:'userUpdate/:id',component:UserUpdateComponent},
      {path:'addUser',component:AddUserComponent}
     
    ]
},]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
