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
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { ChipModule } from "primeng/chip";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SliderModule } from 'primeng/slider';
import{	FileUploadModule } from 'primeng/fileupload';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import {ToastModule} from 'primeng/toast';






@NgModule({
  declarations: [
    AppComponent,
    SellerDashComponent,
    NewProductComponent,
    RequestListComponent,
    PickupListComponent,
    AddPickupComponent,
    ProductListComponent,
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
    FormsModule,
    AutoCompleteModule,
    CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		ColorPickerModule,
		CascadeSelectModule,
		MultiSelectModule,
		ToggleButtonModule,
		SliderModule,
		InputTextareaModule,
		RadioButtonModule,
		InputTextModule,
		RatingModule,
		ChipModule,
		KnobModule,
		InputSwitchModule,
		ListboxModule,
		SelectButtonModule,
		CheckboxModule,
		ButtonModule,
    FileUploadModule,
    RippleModule,
    SplitButtonModule,
    ToastModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
