import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Utils/header/header.component';
import { HomeComponent } from './buyer/home/home.component';
import { CartComponent } from './buyer/cart/cart.component';
import { FooterComponent } from './Utils/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {ProductDetailsComponent} from "./buyer/product-details/product-details.component";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from "@angular/material/button";



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
    MatSnackBarModule,
    MatButtonModule
  ]
})
export class FrontModule { }
