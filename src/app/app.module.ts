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
import { UserUpdateComponent } from './user-update/user-update.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    UserListComponent,
    UserUpdateComponent,
    AddUserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
