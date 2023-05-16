import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layoutB/app.layout.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';

import { PickupDashboardComponent } from './PickupManagement/pickup-dashboard/pickup-dashboard.component';
import { PredictAdminComponent } from './PickupManagement/predict-admin/predict-admin.component';
import { ClaimReviewAdminComponent } from './ClaimRevManagement/claim-review-admin/claim-review-admin.component';
import {OrderStatsComponent} from "./order/order-stats/order-stats.component";
import {EventsComponent} from "./order/events/events.component";


const routes: Routes = [

  {
    path:'',component:AppLayoutComponent,
    children:[
      {path:'',component:UserDashboardComponent},
      {path:'addUser',component:AddUserComponent},
      {path:'PickupDashboard',component:PickupDashboardComponent},
      {path:'predictCoco',component:PredictAdminComponent},
      {path:'claimlist',component:ClaimReviewAdminComponent},
      {path:'orders-stats',component:OrderStatsComponent},
      {path: 'events',component: EventsComponent}
    ]
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
