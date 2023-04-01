import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule as sellerlayout } from './seller/layout/app.layout.module';
import { AppLayoutModule as freelancerlayout } from './freelancer/layout/app.layout.module';
import { AppLayoutModule as agencylayout } from './agency/layout/app.layout.module';
import { AppLayoutModule as sellerlayoutm } from './sellerMohsen/layout/app.layout.module';

import { SellerDashComponent } from './seller/seller-dash/seller-dash.component';
import { NewProductComponent } from './seller/new-product/new-product.component';
import { RequestListComponent } from './freelancer/request-list/request-list.component';
import { PickupListComponent } from './agency/pickup-list/pickup-list.component';
import { AddPickupComponent as addpickupseller} from './sellerMohsen/add-pickup/add-pickup.component';
import { PickupListComponent as PickupListSeller } from './sellerMohsen/pickup-list/pickup-list.component';

import {FormsModule, NgForm} from '@angular/forms';
import {FrontModule} from "./front/front.module";
import {HttpClientModule} from '@angular/common/http';
import { StoreListComponent } from './sellerMohsen/store-list/store-list.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListOfStoreComponent } from './sellerMohsen/list-of-store/list-of-store.component';
import { OrderListMComponent } from './sellerMohsen/order-list-m/order-list-m.component';
import { PickupUpdateComponent } from './sellerMohsen/pickup-update/pickup-update.component';
import { DashboardAgencyComponent } from './agency/dashboard-agency/dashboard-agency.component';
import { RequestAgencyComponent } from './agency/request-agency/request-agency.component';
import { PickupListFreelancerComponent } from './freelancer/pickup-list-freelancer/pickup-list-freelancer.component';
import { DashboardFreelancerComponent } from './freelancer/dashboard-freelancer/dashboard-freelancer.component';
import { AddBranchComponent } from './agency/add-branch/add-branch.component';
import { BranchListAgencyComponent } from './agency/branch-list-agency/branch-list-agency.component';
import { AddDeliveryMenAgencyComponent } from './agency/add-delivery-men-agency/add-delivery-men-agency.component';
import { BranchManagementComponent } from './agency/branch-management/branch-management.component';
import { DeliveryMListAgencyComponent } from './agency/delivery-mlist-agency/delivery-mlist-agency.component';
import { RequestListSellerComponent } from './sellerMohsen/request-list-seller/request-list-seller.component';
import { PikupInProgressSellerComponent } from './sellerMohsen/pikup-in-progress-seller/pikup-in-progress-seller.component';
import { TrakingPickupSellerComponent } from './sellerMohsen/traking-pickup-seller/traking-pickup-seller.component';



@NgModule({
  declarations: [
    AppComponent,
    SellerDashComponent,
    NewProductComponent,
    RequestListComponent,
    PickupListComponent,
    StoreListComponent,
    ListOfStoreComponent,
    OrderListMComponent,
    addpickupseller,
    PickupListSeller,
    PickupUpdateComponent,
    DashboardAgencyComponent,
    RequestAgencyComponent,
    PickupListFreelancerComponent,
    DashboardFreelancerComponent,
    AddBranchComponent,
    BranchListAgencyComponent,
    AddDeliveryMenAgencyComponent,
    BranchManagementComponent,
    DeliveryMListAgencyComponent,
    RequestListSellerComponent,
    PikupInProgressSellerComponent,
    TrakingPickupSellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
