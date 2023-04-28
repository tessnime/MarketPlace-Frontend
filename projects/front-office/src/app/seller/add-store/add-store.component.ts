import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { StoreServiceService } from '../services/store-service.service';
import { Store } from 'Models/Store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.scss']
})
export class AddStoreComponent {
  constructor(private storeservice:StoreServiceService,private route:Router){}
name!:string;
city!:string;
iban!:string;
governorate!:string;
x!:string;
y!:string;
store!:Store;
add(F:NgForm){

console.log(F);

this.storeservice.saveStore(F.value).subscribe(st=>console.log(st));
this.route.navigateByUrl('/store/stores');
}
}
