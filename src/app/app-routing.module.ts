import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layoutB/app.layout.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { ClaimReviewAdminComponent } from './ClaimRevManagement/claim-review-admin/claim-review-admin.component';

const routes: Routes = [

  {
    path:'',component:AppLayoutComponent,
    children:[
      {path:'',component:UserDashboardComponent},
      {path:'userlist',component:UserListComponent},
      {path:'claimlist',component:ClaimReviewAdminComponent}
     
    ]
},]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
