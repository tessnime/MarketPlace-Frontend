import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent as sellerlayoutC} from './seller/layout/app.layout.component';
import { AppLayoutComponent as freelancerlayoutC} from './freelancer/layout/app.layout.component';
import { AppLayoutComponent as agencylayoutC} from './agency/layout/app.layout.component';
import { AppLayoutComponent as sellerlayoutCMohsen} from './agency/layout/app.layout.component';

import { NewProductComponent } from './seller/new-product/new-product.component';
import { SellerDashComponent } from './seller/seller-dash/seller-dash.component';
import { RequestListComponent } from './freelancer/request-list/request-list.component';
import { PickupListComponent } from './agency/pickup-list/pickup-list.component';
import { AddPickupComponent } from './agency/add-pickup/add-pickup.component';
import { AddPickupComponent as addpickupseller } from './sellerMohsen/add-pickup/add-pickup.component';
import {HomeComponent} from "./front/buyer/home/home.component";
import {CartComponent} from "./front/buyer/cart/cart.component";
import { StoreListComponent } from './sellerMohsen/store-list/store-list.component';
import { ListOfStoreComponent } from './sellerMohsen/list-of-store/list-of-store.component';
import { OrderListMComponent } from './sellerMohsen/order-list-m/order-list-m.component';
import { PickupListComponent as PickupListSeller } from './sellerMohsen/pickup-list/pickup-list.component';
import { PickupUpdateComponent } from './sellerMohsen/pickup-update/pickup-update.component';


const routes: Routes = [
  {
    path:'freelancer',component:freelancerlayoutC,
    children:[
      {path:'',component:RequestListComponent},

    ]
  },
  {
    path:'store',component:sellerlayoutC,
    children:[
      {path:'',component:SellerDashComponent},
      {path:'prods',component:NewProductComponent},
      {path:'MyStore',component:StoreListComponent}

    ]
},
{
  path:'agency',component:agencylayoutC,
  children:[
    {path:'',component:PickupListComponent},
    {path:'prods',component:AddPickupComponent}
  ]
},
{
  path:'buyer',component:HomeComponent,
  children:[
    { path: 'cart', component: CartComponent }
  ]
},
{
  path:'Seller',component:sellerlayoutCMohsen,
  children:[
    { path:'DashboardDelivery', component: StoreListComponent },
    {path:'stores',component:ListOfStoreComponent},
    {path:'stores/orders/:idStore',component:OrderListMComponent},
    {path:'stores/orders/:idStore/:idOrder',component:addpickupseller},
    {path:'pickups',component:PickupListSeller},
    {path:'pickups/update/:idPickup',component:PickupUpdateComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
