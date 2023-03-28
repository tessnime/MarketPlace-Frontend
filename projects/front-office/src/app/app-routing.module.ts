import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent as sellerlayoutC} from './seller/layout/app.layout.component';
import { AppLayoutComponent as freelancerlayoutC} from './freelancer/layout/app.layout.component';
import { AppLayoutComponent as agencylayoutC} from './agency/layout/app.layout.component';

import { NewProductComponent } from './seller/new-product/new-product.component';
import { SellerDashComponent } from './seller/seller-dash/seller-dash.component';
import { RequestListComponent } from './freelancer/request-list/request-list.component';
import { PickupListComponent } from './agency/pickup-list/pickup-list.component';
import { AddPickupComponent } from './agency/add-pickup/add-pickup.component';
import {HomeComponent} from "./front/buyer/home/home.component";
import {CartComponent} from "./front/buyer/cart/cart.component";
import { ProductListComponent } from './seller/product-list/product-list.component';

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
      {path:'list',component:ProductListComponent}

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
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
