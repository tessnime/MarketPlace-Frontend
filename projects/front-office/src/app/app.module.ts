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
import { ProductListComponent } from './seller/product-list/product-list.component';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SellerDashComponent,
    NewProductComponent,
    RequestListComponent,
    PickupListComponent,
    AddPickupComponent,
    ProductListComponent
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
  	DataViewModule,
		InputTextModule,
		DropdownModule,
		ButtonModule,
    RatingModule,
    OrderListModule,
    PickListModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
