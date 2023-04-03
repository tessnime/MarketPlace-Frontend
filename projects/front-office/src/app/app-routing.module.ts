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

import {ProductDetailsComponent} from "./front/buyer/product-details/product-details.component";
import {ShopSideComponent} from "./front/buyer/shop-side/shop-side.component";
import {FinalizeOrderComponent} from "./front/buyer/finalize-order/finalize-order.component";
import {AddressBookComponent} from "./front/buyer/orders-setting/address-book/address-book.component";
import {OrdersSettingComponent} from "./front/buyer/orders-setting/orders-setting.component";

import { SignInComponent } from './front/User/sign-in/sign-in.component';
import { RegisterComponent } from './front/User/register/register.component';



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
      {path:'prods',component:NewProductComponent}
    ]
},
{
  path:'agency',component:agencylayoutC,
  children:[
    {path:'',component:PickupListComponent},
    {path:'prods',component:AddPickupComponent}
  ]
},

  {path:'buyer',component:HomeComponent},
  {path: 'buyer/cart', component: CartComponent},
  {path: 'buyer/details/:id', component: ProductDetailsComponent},
  {path: 'buyer/shop-side', component: ShopSideComponent},
  {path: 'buyer/cart/finaliseOrder', component: FinalizeOrderComponent},
  {path: 'buyer/Orders', component: OrdersSettingComponent}


{ path: '', component: HomeComponent },
{ path: 'user/signin', component: SignInComponent },
{ path: 'user/register', component: RegisterComponent }

/*{
  path:'user',component:HomeComponent,
  children:[
    { path: '', component: SignInComponent },
    { path: 'user/signin', component: SignInComponent },
    { path: 'user/register', component: RegisterComponent }
  ]
},
*/






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
