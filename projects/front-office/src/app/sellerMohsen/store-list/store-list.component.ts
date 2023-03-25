import { Component } from '@angular/core';
import { Store } from 'Models/Store';
import { PickupService } from '../servicesM/pickup.service';
import { DataView } from 'primeng/dataview';
import { SelectItem } from 'primeng/api';
import { User } from 'Models/User';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss','../../../assets/vendors/styles/core.css']
})
export class StoreListComponent {
  constructor(private pickupService:PickupService){}
  store!:Store[];
  user!:User;
ngOnInit(){
  this.GetStoreList();
  this.GetUser()
;}
  GetStoreList(){
    this.pickupService.getStoreByUser().subscribe(data=>{this.store=data});
  }
  GetUser(){
    this.pickupService.getUser().subscribe(data=>{this.user=data});
  }

}
