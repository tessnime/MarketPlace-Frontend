import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule as sellerlayout } from './seller/layout/app.layout.module';
import { AppLayoutModule as freelancerlayout } from './freelancer/layout/app.layout.module';
import { AppLayoutModule as agencylayout } from './agency/layout/app.layout.module';

import { SellerDashComponent } from './seller/seller-dash/seller-dash.component';
import { NewProductComponent } from './seller/new-product/new-product.component';
import { RequestListComponent } from './freelancer/request-list/request-list.component';
import { PickupListComponent } from './agency/pickup-list/pickup-list.component';
import { AddPickupComponent } from './agency/add-pickup/add-pickup.component';
import {FrontModule} from "./front/front.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MAT_CHIPS_DEFAULT_OPTIONS, MatChipsModule} from '@angular/material/chips';
import {COMMA, SPACE} from "@angular/cdk/keycodes";
import {MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    SellerDashComponent,
    NewProductComponent,
    RequestListComponent,
    PickupListComponent,
    AddPickupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    sellerlayout,
    freelancerlayout,
    agencylayout,
    FrontModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule

  ],
  providers: [
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [COMMA, SPACE]
      }
    },
    MatSnackBar

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
