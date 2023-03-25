import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule as sellerlayout } from './seller/layout/app.layout.module';
import { AppLayoutModule as freelancerlayout } from './freelancer/layout/app.layout.module';
import { AppLayoutModule as agencylayout } from './agency/layout/app.layout.module';
import { AppLayoutModule as sellerlayoutm } from './seller/layout/app.layout.module';

import { SellerDashComponent } from './seller/seller-dash/seller-dash.component';
import { NewProductComponent } from './seller/new-product/new-product.component';
import { RequestListComponent } from './freelancer/request-list/request-list.component';
import { PickupListComponent } from './agency/pickup-list/pickup-list.component';
import { AddPickupComponent } from './agency/add-pickup/add-pickup.component';
import {FrontModule} from "./front/front.module";
import {HttpClientModule} from '@angular/common/http';
import { StoreListComponent } from './sellerMohsen/store-list/store-list.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    SellerDashComponent,
    NewProductComponent,
    RequestListComponent,
    PickupListComponent,
    AddPickupComponent,
    StoreListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    sellerlayout,
    freelancerlayout,
    agencylayout,
    FrontModule,
    HttpClientModule,
    sellerlayoutm,
    MatMenuModule,
    MatButtonModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
