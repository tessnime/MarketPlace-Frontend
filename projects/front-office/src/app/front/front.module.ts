import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Utils/header/header.component';
import { HomeComponent } from './buyer/home/home.component';
import { CartComponent } from './buyer/cart/cart.component';
import { FooterComponent } from './Utils/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './User/sign-in/sign-in.component';





@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    CartComponent,
    FooterComponent,
    SignInComponent
   
  

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FrontModule { }
