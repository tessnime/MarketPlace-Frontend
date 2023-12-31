import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layoutB/app.layout.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './add-user/add-user.component';
import { PickupDashboardComponent } from './PickupManagement/pickup-dashboard/pickup-dashboard.component';
import { PredictAdminComponent } from './PickupManagement/predict-admin/predict-admin.component';
import { ClaimReviewAdminComponent } from './ClaimRevManagement/claim-review-admin/claim-review-admin.component';
import {MatIconModule} from "@angular/material/icon";
import {OrderStatsComponent} from "./order/order-stats/order-stats.component";
import {ChartModule} from "primeng/chart";
import {ProgressBarModule} from "primeng/progressbar";
import {RatingModule} from "primeng/rating";
import {SliderModule} from "primeng/slider";
import {ToggleButtonModule} from "primeng/togglebutton";
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {ToastModule} from "primeng/toast";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import { EventsComponent } from './order/events/events.component';
import {FileUploadModule} from "primeng/fileupload";
import {ToolbarModule} from "primeng/toolbar";
import {RadioButtonModule} from "primeng/radiobutton";
import {DialogModule} from "primeng/dialog";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextareaModule} from "primeng/inputtextarea";
import {PasswordModule} from "primeng/password";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {InputMaskModule} from "primeng/inputmask";
import {ChipsModule} from "primeng/chips";
import {CalendarModule} from "primeng/calendar";
import {AutoCompleteModule} from "primeng/autocomplete";
import {CommonModule} from "@angular/common";

import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from "@angular/platform-browser";
import { KeywordsComponent } from './order/keywords/keywords.component';
import { CarouselModule } from 'primeng/carousel';
import {CardModule} from "primeng/card";
import {TimelineModule} from "primeng/timeline";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import {BreadcrumbModule} from "primeng/breadcrumb";


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    AddUserComponent,
    PickupDashboardComponent,
    PredictAdminComponent,
    ClaimReviewAdminComponent,
    OrderStatsComponent,
    EventsComponent,
    KeywordsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    RatingModule,
    SliderModule,
    InputTextModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    DropdownModule,
    ProgressBarModule,
    ToastModule,
    TableModule,
    FileUploadModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    CommonModule,
    FormsModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    PasswordModule,
    InputTextareaModule,
    InputTextModule,
    MatIconModule,
    HttpClientModule,
    CarouselModule,
    ChartModule,
    CardModule,
    TimelineModule,
    MenuModule,
    MenubarModule,
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
