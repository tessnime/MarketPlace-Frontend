import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layoutB/app.layout.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PickupDashboardComponent } from './PickupManagement/pickup-dashboard/pickup-dashboard.component';
import { ChartModule } from 'primeng/chart';
import { PredictAdminComponent } from './PickupManagement/predict-admin/predict-admin.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    UserListComponent,
    PickupDashboardComponent,
    PredictAdminComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ChartModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
