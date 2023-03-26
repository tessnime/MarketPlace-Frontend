import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Utils/header/header.component';
import { HomeComponent } from './buyer/home/home.component';
import { CartComponent } from './buyer/cart/cart.component';
import { FooterComponent } from './Utils/footer/footer.component';
import { FormsModule } from '@angular/forms';
import {MAT_CHIPS_DEFAULT_OPTIONS, MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ProductDetailsComponent} from "./buyer/product-details/product-details.component";




@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    CartComponent,
    FooterComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class FrontModule { }
